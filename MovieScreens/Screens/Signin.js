import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper'
import TextInputComponent from './components/TextInput';
import Button from './components/button';

// import { createMaterialBottomTabNavigator } from 'react-native-paper/lib/typescript/react-navigation';

const Signin = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

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

        return valid
    }

    const handleSubmit = () => {
        if (validateForm()) {
            // Perform form submission

        }
    }
    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
    const onPress = () => {
        (
            navigation.navigate('register'),
            handleSubmit('')
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.input}></View>
            <Text style={{ fontSize: 20 }}></Text>
            <TextInput
                style={styles.input}
                mode='outlined'
                label="Email"
                autoCompleteType="email"
                autoCorrect={false}
                value={email}
                textColor='#e1e3e6'
                onChangeText={setEmail}
                error={!!emailError}
                left={<TextInput.Icon icon={'email-outline'} color='#e1e3e6' />}
                right={<TextInput.Icon icon={'check'} color='#e1e3e6' />}
            />
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
            <TextInput
                style={styles.input}
                mode='outlined'
                label="Password"
                textColor='#e1e3e6'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                error={!!passwordError}
                left={<TextInput.Icon icon={'lock-outline'} color='#e1e3e6' />}
                right={<TextInput.Icon icon={'eye'} color='#e1e3e6' />}
            />
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
            {/* <View style={{ height: 10 }}></View> */}
            {/* <Button title='Submit' onPress={handleSubmit} /> */}

            {/* <Text onPress={handleSubmit} style={{color:"white"}}>Submit </Text>         */}
            <TouchableOpacity style={styles.forget}>
                <Text style={styles.forgetext}>Forgot password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Button title={'Sign in'} />
            </TouchableOpacity>

            <Text style={styles.or}>Or sign in with</Text>

            <View style={styles.orview1}>
                <TextInput style={styles.input}

                    mode="flat"
                    placeholder='Google account' placeholderTextColor={'#adaeaf'}
                    left={<TextInput.Icon icon={'google'} color='#e1e3e6' />}
                />

            </View>
            <View style={styles.orview2}>
                <TextInput style={styles.input}

                    mode="flat"
                    placeholder='Watch movie'
                    placeholderTextColor={'#adaeaf'}
                    placeholderTextStyle={{ 'textAlign': 'center' }}
                    left={<TextInput.Icon icon={'facebook'} color='#e1e3e6' />}
                />

            </View>

            <View style={styles.signup}>
                <Text style={styles.signuptext1}>Don't have any account ?</Text>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('register')}>
                    <Text style={styles.signuptext}>Sign Up</Text>
                </TouchableOpacity>
            </View>


            <StatusBar />

        </View>
    )
}
export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f2123',
        paddingHorizontal: 10,
        paddingVertical: 40,
        // justifyContent: 'center',
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5
    },
    forget: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontSize: 15,
        // top: 15
        paddingVertical: 20
    },
    forgetext: {
        fontSize: 15,
        paddingVertical: 20,
        color: '#98999c'
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'transparent',
        color: 'white',
    },
    inputext: {
        fontSize: 15,
        paddingVertical: 10,
        color: '#98999c'

    },

    or: {
        fontSize: 15,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#98999c'
    },
    orview1: {
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent:'center',
        paddingVertical: 10

    },
    orview2: {
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent:'center',
        paddingVertical: 20

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