import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Welcome to the Job Portal</Text>
      <Text style={styles.welcomeMessage}>Search for your dream job</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            onChange={() => {}}
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

      <View style={styles.tabsContainer}></View>
    </View>
  );
};

export default Welcome;
