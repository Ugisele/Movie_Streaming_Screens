import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import { TextInput } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function InputText() {
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
            console.log('Form submitted:', email, password)
        }
    }

    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    return (
        <View style={styles.container}>
            <View style={{ height: 100 }}></View>
            <Text style={{ fontSize: 20 }}></Text>
            <TextInput
                style={{ color: 'white' }}
                mode='outlined'
                label="Email"
                autoCompleteType="email"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
                error={!!emailError}
            />
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
            <TextInput
                mode='outlined'
                label="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                error={!!passwordError}
            />
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
            <View style={{ height: 10 }}></View>
            <Button title='Submit' onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        marginTop: 20,
        padding: 10
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5
    }
});