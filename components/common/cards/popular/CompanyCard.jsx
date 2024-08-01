import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './companycard.style'; // Ensure this file exists or update the import accordingly

const CompanyCard = ({ company }) => {
    return (
        <View style={styles.card}>
            {company.logo && (
                <Image source={{ uri: company.logo }} style={styles.logo} />
            )}
            <Text style={styles.name}>{company.name}</Text>
            <Text style={styles.title}>Linkedin </Text>
            <Text style={styles.description}>{company.description}</Text>
            <Text style={styles.date}>{company.id}</Text>
        </View>
    );
};

export default CompanyCard;
