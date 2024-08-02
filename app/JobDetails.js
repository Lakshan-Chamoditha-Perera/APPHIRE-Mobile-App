import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import axios from 'axios';
import {Ionicons} from '@expo/vector-icons';
import {COLORS} from "../constants";

const JobDetails = () => {
    const {id} = useLocalSearchParams();
    const [job, setJob] = useState(null);
    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

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
                console.error('Error fetching job details:', err);
                // setError(true);
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
                        <Ionicons name="time-outline" size={24} color="#00ff00"/>
                        <Text style={styles.detailText}>{job.type}</Text>
                    </View>
                    <View style={styles.detailBox}>
                        <Ionicons name="cash-outline" size={24} color="#00ff00"/>
                        <Text style={styles.detailText}>
                            {job.salary_min} - {job.salary_max} {job.salary_currency}
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
        color: 'red', textAlign: 'center', marginTop: 20,
    }, card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    }, header: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 16,
    }, logo: {
        width: 50, height: 50, borderRadius: 25, marginRight: 8,
    }, companyName: {
        fontSize: 18, fontWeight: 'bold',
    }, title: {
        fontSize: 22, fontWeight: 'bold', marginBottom: 16,
    }, infoRow: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 8,
    }, infoText: {
        marginLeft: 8, fontSize: 16, color: '#555',
    }, detailsRow: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16,
    }, detailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 8,
        flex: 1,
        marginRight: 8,
    }, detailText: {
        marginLeft: 8, fontSize: 16, color: '#555',
    }, sectionTitle: {
        fontSize: 18, fontWeight: 'bold', marginBottom: 8,
    }, description: {
        fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'justify',
    }, applyButton: {
        backgroundColor: COLORS.secondary, borderRadius: 8, padding: 16, alignItems: 'center',
    }, applyButtonText: {
        fontSize: 18, color: '#fff', fontWeight: 'bold',
    },
});

export default JobDetails;
