import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper'
import TextInputComponent from './components/TextInput';
import Button from './components/button';


const Registration = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const validateForm = () => {
        let valid = true

        // Validate email
        if (!email.trim()) {
            setEmailError('Email is required')
            valid = false
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format')
            valid = false
        } else {
            setEmailError('')
        }
        // Validate password
        if (!password.trim()) {
            setPasswordError('Password is required')
            valid = false
        } else {
            setPasswordError('')
        }
        if (!confirmPassword.trim()) {
            setConfirmPasswordError('Confirm password is required')
            valid = false
        } else if (setPassword !== setConfirmPassword) {
            setConfirmPasswordError('')
            valid = false
        } else {

        }

    }
    // return valid 

    const handleSubmit = () => {
        if (validateForm()) {
            navigation.navigate('home')
        }
    }
    const isValidEmail = (email) => {
        ///////// Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    return (
        <View style={styles.container}>


            <View style={{ paddingHorizontal: 90, paddingVertical: 30 }}>
                <Image source={require('../assets/logo.png')} />

            </View>
            <Text style={{ color: '#9fa1a4', fontSize: 15, textAlign: 'center',  }}> Sign up to discover all our movies and enjoy all our content</Text>


            <KeyboardAvoidingView behavior='padding' hitSlop={""}>
                <TextInput style={{ ...styles.input }}
                    value={email}
                    onChangeText={setEmail}
                    error={!!emailError}
                    textColor='#e1e3e6'
                    mode="flat"
                    placeholder='Enter your email address' placeholderTextColor={'#adaeaf'}
                    right={<TextInput.Icon icon={'email-outline'} color='#7c6537' />}

                />
                {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

                <TextInput style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    error={!!passwordError}
                    textColor='#e1e3e6'
                    secureTextEntry
                    mode="flat"
                    placeholder='Password' placeholderTextColor={'#adaeaf'}
                    right={<TextInput.Icon icon={'lock-outline'} color='#7c6537' />}
                />
                {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

                <TextInput style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    error={!!confirmPassword}
                    textColor='#e1e3e6'
                    secureTextEntry
                    mode="flat"
                    placeholder='confirm password' placeholderTextColor={'#adaeaf'}
                    right={<TextInput.Icon icon={'lock-outline'} color='#7c6537' />}
                />

            </KeyboardAvoidingView>


            <TouchableOpacity onPress={handleSubmit}>

                <Button title='sign up' />

            </TouchableOpacity>



            <View style={{ flexDirection: 'row', gap: 2 }}>
                <Text style={{ fontSize: 15, color: '#98999c' }}>By sign up you agree with</Text>
                <Text style={{ fontSize: 15, color: '#7c6537' }}>Term to use</Text>
                <Text style={{ fontSize: 15, color: '#98999c' }}>and </Text>
                <Text style={{ fontSize: 15, color: '#7c6537' }}> Conditions</Text>

            </View>
            <Text style={styles.or}>or sign up with</Text>

            <TouchableOpacity>
                <View style={styles.orview1}>
                    <Image source={require('../assets/google.png')} style={{ height: 20, width: 20 }} />
                    <Text style={styles.orview1text}>Sign up with Google account</Text>


                </View>

            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.orview2}>
                    <Image source={require('../assets/apple.png')} style={{ height: 30, width: 30, tintColor: '#fefefe' }} />
                    <Text style={styles.orview2text}>Sign up with apple account</Text>


                </View>

            </TouchableOpacity>


            <View style={styles.signup}>
                <Text style={styles.signuptext1}>Already have any account ?</Text>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('login')}>
                    <Text style={styles.signuptext}> Sign in</Text>
                </TouchableOpacity>
            </View>


            <StatusBar />

        </View >
    )
}
export default Registration;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f2123',
        paddingHorizontal: 15,
        paddingVertical: 20,
        // justifyContent: 'center',

    },

    input: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'transparent',
        marginBottom: 10,
    },
    inputext: {
        fontSize: 15,
        // paddingVertical: 10,
        color: '#98999c'

    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5
    },

    or: {
        fontSize: 15,
        paddingVertical: 15,
        textAlign: 'center',
        color: '#98999c'
    },
    orview1: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        width: "100%",
        height: 50,
        backgroundColor: '#ccc',
        // position:'absolute'
        borderRadius: 10,
        paddingVertical: 10


    },
    orview1text: {
        fontSize: 15,
        color: '#111111'
    },
    orview2: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        width: "100%",
        height: 50,
        backgroundColor: '#111111',
        borderRadius: 10,
        // position:'absolute'
        top: 20,
        marginBottom: 30

    },
    orview2text: {
        fontSize: 15,
        color: '#ccc'
    },
    signup: {
        fontSize: 15,
        flexDirection: 'row',
        // gap: 20,
        justifyContent: 'center'
    },
    signuptext: {
        fontSize: 15,
        color: '#bdaa52'

    },
    signuptext1: {
        fontSize: 15,
        color: '#98999c'
    }
})