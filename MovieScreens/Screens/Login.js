import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from 'react-native-vector-icons/AntDesign';
import { colors } from 'react-native-elements';
import { IconButton } from 'react-native-paper'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/login.jpg')}
                style={styles.image}>



                <View style={{ backgroundColor: "rgba(000,000,000,0.7)", height: "100%" }}>
                    <View style={styles.log}>
                        <Image source={require('../assets/logo (1).png')} />
                        <TouchableOpacity>
                            <Text style={styles.logtext} onPress={() =>
                            navigation.navigate('register')}>Register</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <LinearGradient colors={['rgba(0,0,0,0.7)', '#26282c']}> */}

                    <View style={styles.Login}>

                        <Text style={styles.text}>Login</Text>

                        <TextInput style={styles.input}

                            mode="flat"
                            label={'Email'}
                            placeholder='Enter your email address' placeholderTextColor={'#adaeaf'}
                            right={<TextInput.Icon icon={'email-outline'} color='#867f3f' />}

                        />
                        <Text style={styles.inputext}>Password</Text>

                        <TextInput style={styles.input}
                            underlineColor='black'
                            secureTextEntry
                            mode="flat"
                            label={'password'}
                            placeholder='*********' placeholderTextColor={'#adaeaf'}
                            right={<TextInput.Icon icon={'eye-off-outline'} color='#867f3f' />}

                        />

                        <TouchableOpacity style={styles.forget}>
                            <Text style={styles.forgetext}>Forgot password ?</Text>
                        </TouchableOpacity>


                        <Text style={styles.text1}>or contuiner with</Text>
                        <View style={styles.or}>
                            <TouchableOpacity style={styles.icon}>
                                {/* <AntDesign name='facebook-square' color='red'/> */}
                                <IconButton icon="google" size={30} color="#867f3f" />

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon}>
                                <IconButton icon="facebook" size={30} color="blue" />

                            </TouchableOpacity>

                        </View>


                        <TouchableOpacity style={styles.btn} onPress={() =>
                            navigation.navigate('home')}>
                            <Text style={styles.btntext}>Login in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        // paddingVertical: 10,
        paddingHorizontal: 10
    },
    log: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        gap: 130,

    },
    logtext: {
        fontSize: 25,
        color: '#9f8a41',


    },
    image: {
        // flex: 1,
        height: '100%',
        resizeMode: "cover",
    },
    Login: {
        // alignContent:'center',
        // flexDirection:'column',
        // justifyContent: 'flex-end',
        // alignContent: 'flex-end',
        // backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        // height: 305,
        width: '100%',
        paddingHorizontal: 13,
        paddingVertical: 300,
        // borderRadius: 40,
    },
    text: {

        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        paddingVertical: 20,
    },
    forget: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontSize: 15,
        // top: 15
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
        paddingVertical: 10

    },
    // icon:{
    //     borderRadius: 50,
    //     borderWidth: 1
    // },
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
    inputext: {
        fontSize: 15,
        paddingVertical: 10,
        color: '#98999c',


    },
    btn: {
        backgroundColor: '#fdd130',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,


    },
    btntext: {
        fontSize: 20,

    },
})