import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ActivityIndicator} from 'react-native';
import {useSearchParams} from 'expo-router';
import axios from 'axios';

const JobDetails = () => {
    const {id} = useSearchParams(); // Get the job ID from the route parameters
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`http://192.168.43.135:9000/jobs/${id}`); // Fetch job details
                setJob(response.data);
            } catch (err) {
                console.error('Error fetching job details:', err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobDetails();
    }, [id]);

    if (isLoading) {
        return (<SafeAreaView>
                <ActivityIndicator size="large" color="#0000ff"/>
            </SafeAreaView>);
    }

    if (error) {
        return (<SafeAreaView>
                <Text>Error fetching job details. Please try again later.</Text>
            </SafeAreaView>);
    }

    return (<SafeAreaView>
            {job ? (<View>
                    <Text>{job.title}</Text>
                    <Text>{job.description}</Text>
                    {/* Display other job details here */}
                </View>) : (<Text>No job details available</Text>)}
        </SafeAreaView>);
};

export default JobDetails;
