import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {useLocalSearchParams, useRouter} from 'expo-router';
import axios from 'axios';
import {Ionicons} from '@expo/vector-icons';
import {COLORS, SIZES} from "../constants";

const JobDetails = () => {
    const {id} = useLocalSearchParams();
    const [job, setJob] = useState(null);
    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {

                const response = await axios.get(`http://192.168.43.135:9000/jobs/${id}`);
                console.log(response.data)
                const companyResponse = await axios.get(`http://192.168.43.135:9000/company/${response.data.company}`);
                console.log(companyResponse.data)

                setJob(response.data);
                setCompany(companyResponse.data);
            } catch (err) {
                Alert.alert('Error', 'Error fetching job details. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchJobDetails();
        }
    }, [id]);

    const handleApply = () => {
        if (job && job.application_url) {
            Linking.openURL(job.application_url);
        }
    };

    if (isLoading) {
        return <ActivityIndicator size="large" color="#00ff00" style={styles.loading}/>;
    }

    if (error) {
        return <Text style={styles.error}>Error fetching job details. Please try again later.</Text>;
    }

    return (<SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {/*back button*/}
            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
                <Ionicons name="arrow-back-outline" size={24} color="#555"/>
            </TouchableOpacity>

            {job && (<View style={styles.card}>

                <View style={styles.header}>
                    <Image source={{uri: company?.logo}} style={styles.logo}/>
                    <Text style={styles.companyName}>{company?.name}</Text>
                </View>

                <Text style={styles.title}>{job.title}</Text>

                <View style={styles.infoRow}>
                    <Ionicons name="business-outline" size={16} color="#555"/>
                    <Text style={styles.infoText}>{company?.name}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Ionicons name="location-outline" size={16} color="#555"/>
                    <Text style={styles.infoText}>{job.location}</Text>
                </View>

                <View style={styles.detailsRow}>
                    <View style={styles.detailBox}>
                        <Ionicons name="time-outline" size={24}/>
                        <Text style={styles.detailText}>{job.type}</Text>
                    </View>
                    <View style={styles.detailBox}>
                        <Ionicons name="cash-outline" size={24}/>
                        <Text style={styles.detailText}>
                            {job.salary_currency} {job.salary_min} - {job.salary_max}
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Overview</Text>
                <Text style={styles.description}>{job.description?.overview}</Text>

                <Text style={styles.sectionTitle}>Benefits</Text>
                <Text style={styles.description}>{job.description?.benefits.join(', ')}</Text>

                <Text style={styles.sectionTitle}>Responsibilities</Text>
                <Text style={styles.description}>{job.description?.responsibilities.join(', ')}</Text>

                <Text style={styles.sectionTitle}>Qualifications</Text>
                <Text style={styles.description}>{job.description?.qualifications.join(', ')}</Text>

                <Text style={styles.sectionTitle}>Keywords</Text>
                <Text style={styles.description}>{job.description?.keywords.join(', ')}</Text>

                <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
                    <Text style={styles.applyButtonText}>Apply for this job</Text>
                </TouchableOpacity>
            </View>)}
        </ScrollView>
    </SafeAreaView>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#f8f9fa', padding: 16,
    }, loading: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }, error: {
        color: 'ed', textAlign: 'center', marginTop: 20,
    }, card: {
        paddingTop: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    }, header: {
        flexDirection: 'column', alignItems: 'center', marginBottom: 16, justifyContent: "center"
    }, logo: {
        width: 150, height: 150, borderRadius: 25, marginRight: 8,
    }, companyName: {
        marginTop: 8, fontSize: SIZES.xLarge, fontWeight: 'bold', color: COLORS.primary,
    }, title: {
        fontSize: SIZES.large, fontWeight: 'bold', marginBottom: 16,
    }, infoRow: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 8,
    }, infoText: {
        marginLeft: 8, fontSize: SIZES.medium, color: '#555',
    }, detailsRow: {
        flexDirection: 'row', justifyContent: 'pace-between', marginBottom: 16,
    }, detailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 8,
        flex: 1,
        marginRight: 8,
    }, detailText: {
        marginLeft: 8, fontSize: SIZES.small, color: '#555',
    }, sectionTitle: {
        fontSize: SIZES.medium, fontWeight: 'bold', marginBottom: 8,
    }, description: {
        fontSize: SIZES.small, color: '#555', marginBottom: 16, textAlign: 'justify',
    }, applyButton: {
        backgroundColor: COLORS.secondary, borderRadius: 8, padding: 16, alignItems: 'center',
    }, applyButtonText: {
        fontSize: 18, color: '#fff', fontWeight: 'bold',
    }, backButton: {
        position: 'absolute', top: 16, left: 16, zIndex: 1,
    },

});

export default JobDetails;