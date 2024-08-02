import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {CompanyList, JobList} from '../components';
import styles from "../components/home/welcome/welcome.style";
import UserProfileIcon from "../components/common/UserProfileIcon";

import { StatusBar } from 'react-native';


const Home = () => {
    return (<SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <StatusBar barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, padding: SIZES.medium}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                        <Text style={styles.userName}>Welcome to the Job Portal</Text>
                        <Text style={styles.welcomeMessage}>Search for your dream job</Text>
                    </View>
                    <UserProfileIcon profileUrl='https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                </View>

                <CompanyList/>
                <JobList/>
            </View>
        </ScrollView>
    </SafeAreaView>);
};

export default Home;
