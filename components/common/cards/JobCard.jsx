import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import moment from 'moment';

const JobCard = ({ job }) => {
    const formattedDate = moment(job.published).format('MMM DD, YYYY');

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => Linking.openURL(job.application_url)}
        >
            <View style={styles.header}>
                <Text style={styles.title}>{job.title}</Text>
                {/*add break here   */}

                {job.salary_min && job.salary_max && (
                    <Text style={styles.salary}>${job.salary_min} - ${job.salary_max}</Text>
                )}
            </View>

            <View style={styles.details}>
                <Text style={styles.location}>{job.location}</Text>
                <Text style={styles.type}>{job.type} - {job.has_remote ? 'Remote' : 'On-Site'}</Text>
                <Text style={styles.date}>Posted: {formattedDate}</Text>
            </View>

            <Text numberOfLines={3} style={styles.descriptionPreview}>
                {job.description.replace(/<[^>]+>/g, '').slice(0, 150)}...
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginVertical: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    salary: {
        color: '#10b981',
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
    descriptionPreview: {
        color: '#4b5563',
        lineHeight: 20,
    },
});

export default JobCard;
