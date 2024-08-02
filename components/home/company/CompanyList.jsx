import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import CompanyCard from '../../common/cards/popular/CompanyCard';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('http://192.168.43.135:9000/company');
                setCompanies(response.data);
            } catch (err) {
                setError(err.message);
                Alert.alert('Error', 'Error fetching companies. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff"/>; // Loading indicator
    }

    if (error) {
        return <Text style={{color: 'red'}}>{error}</Text>; // Simple error display
    }

    return (<View>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Top Companies</Text>
        <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 10}}>
            {companies.map(company => (<CompanyCard key={company.id} company={company}/>))}
        </ScrollView>
    </View>);
};

export default CompanyList;
