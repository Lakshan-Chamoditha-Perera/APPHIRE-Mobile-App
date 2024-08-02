import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS, SIZES} from "../../constants";


const UserProfileIcon = ({profileUrl}) => {
    return (<View style={styles.iconContainer}>
        <Image source={{
            uri: profileUrl
        }} style={{width: 50, height: 50, borderRadius: 25}}/>
    </View>);
};

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center', marginVertical: SIZES.medium,
    }, iconText: {
        marginTop: 8, fontSize: SIZES.medium, color: COLORS.primary,
    },
});

export default UserProfileIcon;
