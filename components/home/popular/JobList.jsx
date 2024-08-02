import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useRouter} from 'expo-router';
import styles from './Joblist.style';
import axios from 'axios';
import JobCard from '../../common/cards/JobCard';
import {SIZES} from '../../../constants';
import CompanyCard from "../../common/cards/popular/CompanyCard";

const JobList = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [allJobs, setAllJobs] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://192.168.43.135:9000/jobs'); // Replace with your API
                setAllJobs(response.data);
                setDisplayedJobs(response.data.slice(0, 5));
            } catch (err) {
                console.error('Error fetching jobs:', err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleShowAll = useCallback(() => {
        if (showAll) {
            setDisplayedJobs(allJobs.slice(0, 5)); // Show only the first 5 jobs if not showing all
        } else {
            setDisplayedJobs(allJobs); // Show all jobs
        }
        setShowAll(!showAll);
    }, [showAll, allJobs]);

    if (isLoading) {
        return (<View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>);
    }

    if (error) {
        return (<View style={styles.container}>
            <Text>Error fetching jobs. Please try again later.</Text>
        </View>);
    }

    return (<View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Popular Jobs</Text>
            <TouchableOpacity onPress={handleShowAll} style={styles.button}>
                <Text style={styles.buttonText}>{showAll ? 'Show Less' : 'Show All'}</Text>
            </TouchableOpacity>
        </View>

        <ScrollView horizontal={false} contentContainerStyle={{paddingVertical: 10}}>
            {displayedJobs.map(item => (<JobCard key={item.id} job={item}/>))}
        </ScrollView>
    </View>);
};

export default JobList;
