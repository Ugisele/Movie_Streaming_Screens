import React, { useContext } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image, picker, Dimensions, Pressable, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper'
import TextInputComponent from './components/TextInput';
import Button from './components/button';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { changeintoLightMode } from '../Screens/context/themeContex';



const height = Dimensions.get("window").height


const Profile = ({ navigation }) => {

    const { light, IntoLightMode } = useContext(changeintoLightMode)

    return (
        <View style={{
            backgroundColor: light ? 'white' : '#1f2123',
            paddingHorizontal: 15,
            // paddingVertical: 10,
            height: height
        }}>

            <TouchableOpacity onPress={() => { IntoLightMode() }} style={{ flex: 1, textAlign: "start", justifyContent: 'flex-start', alignContent: 'flex-start' }}>
                {/* <Text style={{color: 'white', fontSize: 18}}>Change Color</Text> */}
                <Entypo name='switch' size={60} color="#1f2123" style={{ color: light ? '#1f2123' : 'white', right: 10, }} />

            </TouchableOpacity>

            <View style={{ display: 'flex', alignItems: 'center', top: '20' }}>

                <Image style={{ height: 100, width: 100, borderRadius: 50, }} source={require('../assets/img 1.jpeg')} />
                <View style={{ display: 'flex', flexDirection: 'row', gap: 4, marginTop: 15, borderWidth: 2, borderColor: '#626263', borderRadius: 10, width: 145, padding: 7 }}>
                    <FontAwesome name='edit' size={25} color={'#7c6537'} />
                    <Text style={{ fontSize: 15, color: '#adaeaf' }}> Change avatar</Text>
                </View>

            </View>
            <KeyboardAvoidingView behavior='position'>
                <TextInput style={styles.input}
                    mode="flat"
                    label={'Email'}
                    placeholder='Umutonigisele12@gmail.com' placeholderTextColor={'#adaeaf'}
                    right={<TextInput.Icon icon={'email-outline'} color='#7c6537' />}
                />
                <TextInput style={styles.input}
                    secureTextEntry
                    mode="flat"
                    label={'Username'}
                    placeholder='Ugisele' placeholderTextColor={'#adaeaf'}
                    right={<TextInput.Icon icon={'account-outline'} color='#7c6537' />}
                />
                <TextInput style={styles.input}
                    secureTextEntry
                    mode="flat"
                    label={'password'}
                    placeholder='Password' placeholderTextColor={'#adaeaf'}
                    right={<TextInput.Icon icon={'lock-outline'} color='#7c6537' />}
                />
                <TextInput style={styles.input}
                    secureTextEntry
                    mode="flat"
                    label={'Phone'}
                    placeholder='Phone' placeholderTextColor={'#adaeaf'}
                    right={<TextInput.Icon icon={'phone'} color='#7c6537' />}
                />
                <TextInput style={styles.input}
                    secureTextEntry
                    mode="flat"
                    label={'Gender'}
                    placeholder='Gender' placeholderTextColor={'#adaeaf'}
                    right={<TextInput.Icon icon={'heart-outline'} color='#7c6537' />}
                />
                <TouchableOpacity style={{ marginTop: 30, marginBottom: 30, }}>

                    <Button title={'Save Changes'} />

                </TouchableOpacity>

            </KeyboardAvoidingView>



            <StatusBar style='auto' />

        </View>
    )
}
export default Profile;

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

})