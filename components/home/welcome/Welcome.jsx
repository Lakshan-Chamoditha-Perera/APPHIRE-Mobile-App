import React, {useEffect, useState} from "react";
import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import styles from "./welcome.style";
import {icons} from "../../../constants";

const array = [{
    id: 1, name: "Region 1",
}, {
    id: 2, name: "Region 2",
}, {
    id: 3, name: "Region 3",
},];

const Welcome = () => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full-time");
    const [jobRegions, setJobRegions] = useState([]);

    useEffect(() => {
        setJobRegions(array)
    }, []);

    return (<View style={styles.container}>
        <Text style={styles.userName}>Welcome to the Job Portal</Text>
        <Text style={styles.welcomeMessage}>Search for your dream job</Text>
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    onChange={() => {
                    }}
                    style={styles.searchInput}
                    value=""
                    placeholder="What are you looking for?"
                />
            </View>
            <TouchableOpacity
                style={styles.searchBtn}
                onPress={() => router.navigate("Search")}
            >
                <Image
                    source={icons.search}
                    resizeMode="cover"
                    style={styles.searchBtnImage}
                />
            </TouchableOpacity>
        </View>

        <View style={styles.tabsContainer}>
            <FlatList
                data={jobRegions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (<TouchableOpacity
                    style={styles.tab(activeJobType === item.name)}
                    onPress={() => {
                        setActiveJobType(item.name);
                        router.push(`/search/${item.name}`);
                    }}
                >
                    <Text style={activeJobType === item.name ? styles.activeText : null}>
                        {item.name}
                    </Text>
                </TouchableOpacity>)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    </View>);
};

export default Welcome;
