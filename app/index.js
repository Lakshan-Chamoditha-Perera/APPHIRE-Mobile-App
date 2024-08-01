import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, ScreenHeaderBtn, Welcome,PopularJobs } from "../components";


const Home = () =>
{
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState("Welcome");

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightWhite
        }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
                    ),
                    headerTitle: ""
                }}
            >
            </Stack.Screen>

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome />
                    <PopularJobs />
                    <Nearbyjobs />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;