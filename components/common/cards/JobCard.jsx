import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import { COLORS, SIZES } from "../../../constants";
import { useRouter } from 'expo-router';

const JobCard = ({ job }) => {
    const router = useRouter();
    const formattedDate = moment(job.published).format('MMM DD, YYYY');

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/JobDetails?id=${job.id}`)}
            accessible={true}
            accessibilityLabel={`Job card for ${job.title}`}
        >
            <View style={styles.header}>
                <Text style={styles.title}>{job.title}</Text>
                {job.salary_min && job.salary_max && (
                    <Text style={styles.salary}>
                        ${job.salary_min} - ${job.salary_max}
                    </Text>
                )}
            </View>

            <View style={styles.details}>
                <Text style={styles.location}>{job.location}</Text>
                <Text style={styles.type}>
                    {job.type} - {job.has_remote ? 'Remote' : 'On-Site'}
                </Text>
                <Text style={styles.date}>Posted: {formattedDate}</Text>
            </View>

            <View style={styles.footer}>
                <Text
                    onPress={() => Linking.openURL(job.application_url)}
                    style={styles.applyButton}
                    accessible={true}
                    accessibilityLabel={`Apply for ${job.title}`}
                >
                    Apply
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        borderColor: '#e5e7eb',
        borderWidth: 1,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
    },
    salary: {
        color: '#16a34a',
        fontWeight: '600',
    },
    details: {
        marginBottom: 10,
    },
    location: {
        color: '#6b7280',
        fontSize: 14,
    },
    type: {
        fontStyle: 'italic',
        color: '#6b7280',
        fontSize: 14,
    },
    date: {
        fontSize: 12,
        color: '#9ca3af',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    applyButton: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.small,
        backgroundColor: COLORS.secondary,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
});

export default JobCard;
