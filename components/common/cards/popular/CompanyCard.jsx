import React from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CompanyCard = ({company}) => {
    const openURL = (url) => {
        if (url) {
            Linking.openURL(url);
        }
    };

    return (<View style={styles.card}>
        {company.logo && (<Image source={{uri: company.logo}} style={styles.logo}/>)}
        <Text style={styles.name}>{company.name}</Text>

        <View style={styles.socialIcons}>
            {company.linkedin_url && (<TouchableOpacity onPress={() => openURL(company.linkedin_url)}>
                <Icon name="linkedin" size={20} color="#0077b5"/>
            </TouchableOpacity>)}
            {company.twitter_handle && (
                <TouchableOpacity onPress={() => openURL(`https://twitter.com/${company.twitter_handle}`)}>
                    <Icon name="twitter" size={20} color="#1DA1F2"/>
                </TouchableOpacity>)}
            {company.github_url && (<TouchableOpacity onPress={() => openURL(company.github_url)}>
                <Icon name="github" size={20} color="#333"/>
            </TouchableOpacity>)}
        </View>

        <Text style={styles.id}>ID: {company.id}</Text>
    </View>);
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        alignItems: 'center',
        position: 'relative',
        width: 180,

    }, logo: {
        width: 60, height: 60, borderRadius: 30, marginBottom: 10,
    }, name: {
        fontSize: 16, fontWeight: 'bold', color: '#1f2937', marginBottom: 10,
    }, socialIcons: {
        width: 120, flexDirection: 'row', justifyContent: 'space-evenly',
    }, description: {
        fontSize: 14, color: '#6b7280', textAlign: 'center', marginBottom: 10,
    }, id: {
        fontSize: 8, color: '#9ca3af', position: 'absolute', bottom: 10, right: 10,
    },
});

export default CompanyCard;
