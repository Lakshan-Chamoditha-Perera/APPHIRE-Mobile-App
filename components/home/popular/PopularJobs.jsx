import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import axios from "axios";
import JobCard from "../../common/cards/JobCard";
import {SIZES} from "../../../constants"; // Assuming JobCard is in a sibling directory

const PopularJobs = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [popularJobs, setPopularJobs] = useState([]);

    useEffect(() => {
        const fetchPopularJobs = async () => {
            try {
                const response = await axios.get('http://192.168.43.135:9000/jobs'); // Replace with your API
                setPopularJobs(response.data);
            } catch (err) {
                console.error('Error fetching jobs:', err); // Log error for debugging
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPopularJobs(); // Call the fetch function
    }, []);

    // Loading indicator
    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity onPress={() => router.push("/search")}>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            {/* Render Job Cards */}
            <FlatList
                data={popularJobs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <JobCard job={item} />}
                contentContainerStyle={{ columnGap: SIZES.medium }} // Adjust spacing between cards
                showsHorizontalScrollIndicator={false} // Hide scroll indicator
            />
        </View>
    );
};

export default PopularJobs;
