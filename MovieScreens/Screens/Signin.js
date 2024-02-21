import React from 'react';
import { StatusBar, Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper'


const Signin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.inputext}>Email address</Text>
            <TextInput style={styles.input}

                mode="flat"
                placeholder='Enter your email address' placeholderTextColor={'#adaeaf'}
                left={<TextInput.Icon icon={'account-outline'} color='#e1e3e6' />}
                right={<TextInput.Icon icon={'check'} color='#e1e3e6' />}

            />
            <Text style={styles.inputext}>Password</Text>

            <TextInput style={styles.input}
                secureTextEntry
                mode="flat"
                placeholder='*********' placeholderTextColor={'#adaeaf'}
                left={<TextInput.Icon icon={'lock-outline'} color='#e1e3e6' />}
                right={<TextInput.Icon icon={'check'} color='#e1e3e6' />}

            />
            <TouchableOpacity style={styles.forget}>
                <Text style={styles.forgetext}>Forgot password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>Sign in</Text>
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
                    placeholder='Watch movie' placeholderTextColor={'#adaeaf'} placeholderTextStyle={{ 'textAlign': 'center' }}
                    left={<TextInput.Icon icon={'facebook'} color='#e1e3e6' />}
                />
            </View>



            <View style={styles.signup}>
                <Text style={styles.signuptext1}>Don't have any account ?</Text>
                <TouchableOpacity>
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
        backgroundColor: '#000000',
        paddingHorizontal: 15,
        paddingVertical: 40,
        // justifyContent: 'center',

    },
    forget: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontSize: 15,
        // top: 15
        paddingVertical: 10
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
    },
    inputext: {
        fontSize: 15,
        paddingVertical: 10,
        color: '#98999c'

    },

    btn: {
        backgroundColor: '#fdd130',
        height: 40,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 4,
    },
    btntext: {
        fontSize: 20,

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

    },

})