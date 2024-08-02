import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useRouter} from 'expo-router';
import {COLORS, images, SIZES} from '../constants';


const Index = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            Alert.alert('Index Success', 'You are now logged in!');
            router.replace('/home');
        } else {
            Alert.alert('Index Error', 'Please enter both email and password.');
        }
    };

    return (<SafeAreaView style={styles.container}>
        <View style={styles.inner}>

            <View style={{
                alignItems: 'center', justifyContent: 'center',
            }}>
                <Image source={images.apphire_1} style={styles.logo}/>
            </View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.text}>We're excited to have you back, can't wait to see what you've been up to since
                last logged in</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.forgot}
                              onPress={() => Alert.alert('Forgot Password', 'Feature not yet implemented.')}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.or}>- or -</Text>

            <TouchableOpacity style={styles.buttonGoogle}
                              onPress={() => Alert.alert('Google Login', 'Feature not yet implemented.')}>
                <Image source={{
                    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
                }} style={{width: 50, height: 50, borderRadius: 25}}

                />
                <Text style={styles.buttonTextGoogle}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGoogle}
                              onPress={() => Alert.alert('Apple Login', 'Feature not yet implemented.')}>

                <Image source={{
                    uri: 'https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg',
                }} style={{width: 50, height: 50, borderRadius: 25}}
                />

                <Text style={styles.buttonTextApple}>Continue with Apple</Text>
            </TouchableOpacity>
            <View style={styles.create}>
                <Text style={styles.text}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/signup')}>
                    <Text style={styles.createText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        justifyContent: 'center',
        padding: SIZES.large,
        alignItems: 'center',
    }, inner: {
        padding: SIZES.medium,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,


    }, title: {
        fontSize: 30, fontWeight: 'bold', marginBottom: 16, textAlign: 'center', color: COLORS.primary
    }, header: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center', color: COLORS.primary
    }, text: {
        fontSize: 12, marginBottom: 16, textAlign: 'center', color: COLORS.gray
    }, textInput: {
        height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, marginBottom: 16, paddingHorizontal: 12,
    }, forgot: {
        marginBottom: 10, alignItems: 'flex-end',
    }, forgotText: {
        alignItems: 'flex-end', fontSize: 12, color: COLORS.primary, textDecorationLine: 'underline',
    }, button: {
        backgroundColor: COLORS.primary, padding: 16, borderRadius: 8, alignItems: 'center',
    }, buttonText: {
        color: '#fff', fontSize: 18, fontWeight: 'bold',
    }, or: {
        fontSize: 12, marginBottom: 16, textAlign: 'center', color: COLORS.gray
    }, buttonGoogle: {
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        marginBottom: 16,
        justifyContent: 'space-evenly',
    }, create: {
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }, createText: {
        fontSize: 12, color: COLORS.primary, textDecorationLine: 'underline',
    }, logo: {
        width: 150, height: 150, borderRadius: 25, marginBottom: 10,
    }
});

export default Index;