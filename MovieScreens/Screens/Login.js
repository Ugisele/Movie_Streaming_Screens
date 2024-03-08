import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Keyboard, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton } from 'react-native-paper'
import Button from './components/button';
import { height } from './Action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Firebase_Auth } from '../FirebaseConfig';
import FlashMessage, {showMessage} from "react-native-flash-message";
import TextInputComponent from './components/TextInput';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordSecurity, setPasswordSecurity] = useState(true)

    const auth = Firebase_Auth

    const isValidEmail = (email) => {
        ///////// REGEX
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
    const onSubmit = () => {
        let validation = true

        if (!email.trim() === "") {
            setEmailError('email required')
            validation = false
        } else if (!isValidEmail(email)) {
            setEmailError('invalid email address')
            validation = false
        }
        else {
            setEmailError('')
        }
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters')
            validation = false
        } else {
            setPasswordError('')
        }
        return validation
    }
    const onPress = async () => {
        if (onSubmit()) {
            
            console.log(email);
            console.log(password);
            try {
                const response = await signInWithEmailAndPassword(auth, email,password)
                console.log(response);
                console.log('you are now signed in');

                showMessage({
                    message: "Welcome to home screen!",
                    type: "success",
                    duration: 5000,
                    autoHide: true,

                  });

                navigation.navigate('home')

            } catch (error) {
                console.log(error);

                showMessage({
                    message: "Invalid creditentials!",
                    type: "danger",
                    duration: 5000,
                    autoHide: true,});
            }   
        }
    }
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/login.jpg')}
                style={styles.image}>

                <KeyboardAvoidingView behavior='position' >
                    <View style={{
                        backgroundColor: "rgba(0,0,0,0.7)", height: height, justifyContent: "space-between",
                    }}>
                        <View style={styles.log} >
                            <Image source={require('../assets/logo.png')} />
                            <TouchableOpacity>
                                <Text style={styles.logtext} onPress={() =>
                                    navigation.navigate('register')}>Register</Text>
                            </TouchableOpacity>
                        </View>
                        <LinearGradient colors={['rgba(0,0,0,0.7)', '#26282c']}>

                            <View style={styles.Login}>

                                <Text style={styles.text}>Login</Text>

                                <TextInputComponent
                             
                                secureTextEntry={passwordSecurity}
                                mode="flat"
                                textColor='#e1e3e6'
                                value={password}
                                onChangeText={setPassword}
                                label={'password'}
                                placeholder='*********' placeholderTextColor={'#adaeaf'}
                                IconName2={passwordSecurity ? 'eye-off-outline' : 'eye'}
                                // Icon={}
                                />


                                <TextInput style={styles.input}
                                    mode="flat"
                                    label={'Email'}
                                    textColor='#e1e3e6'
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder='Enter your email address' placeholderTextColor={'#adaeaf'}
                                    right={<TextInput.Icon icon={'email-outline'} color='#867f3f' />}
                                />
                                {emailError ? <Text style={{ fontSize: 15, color: "red" }}>{emailError}</Text> : null}

                                <TextInput style={styles.input}
                                    underlineColor='black'
                                    secureTextEntry={true}
                                    mode="flat"
                                    textColor='#e1e3e6'
                                    value={password}
                                    onChangeText={setPassword}
                                    label={'password'}
                                    placeholder='*********' placeholderTextColor={'#adaeaf'}
                                    right={<TextInput.Icon  icon={passwordSecurity ? 'eye-off-outline' : 'eye'} color='#867f3f'/>} 
                                />
                                {passwordError ? <Text style={{ fontSize: 15, color: "red" }} >{passwordError}</Text> : null}

                                <TouchableOpacity style={styles.forget}>
                                    <Text style={styles.forgetext}>Forgot password ?</Text>
                                </TouchableOpacity>

                                <Text style={styles.text1}>or contuiner with</Text>
                                <View style={styles.or}>
                                    <TouchableOpacity style={styles.icon}>
                                        <IconButton icon="google" size={30} color="#867f3f" />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.icon}>
                                        <IconButton icon="facebook" size={30} color="blue" />
                                    </TouchableOpacity>

                                </View>

                                <TouchableOpacity style={styles.btn} onPress={onPress}>
                                    <Button title={'Login'} />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>

                </KeyboardAvoidingView>
            </ImageBackground >

            <StatusBar style='light' />

        </View>
    )
}
export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        height: "100%",

        // paddingVertical: 10,
        paddingHorizontal: 10
    },
    log: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        // backgroundColor: "red"
        // gap: 130,

    },
    logtext: {
        fontSize: 25,
        color: '#9f8a41',

    },
    image: {
        flex: 1,
        height: '100%',
        resizeMode: "cover",
    },
    Login: {
        width: '100%',
        // height: '100%',
        // backgroundColor: "red"
        // justifyContent: "flex-end",
        // paddingHorizontal: 10,
        // paddingVertical: 300,
        // borderRadius: 40,
    },
    text: {

        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        paddingBottom: 20,
    },
    forget: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontSize: 15,
        paddingVertical: 5
    },
    forgetext: {
        fontSize: 15,
        paddingVertical: 5,
        color: 'white'
    },
    or: {
        flexDirection: 'row',
        gap: 0,
        width: '15px',
        paddingVertical: 2

    },

    text1: {
        color: 'white',
        fontSize: 15,
        paddingVertical: 10
    },
    input: {

        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'transparent',
    },

})