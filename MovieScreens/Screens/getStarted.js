import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';


const Started = () => {

    return (

        <View style={styles.container}>
            <ImageBackground source={require('../assets/jocker.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.text1}>Enjoy your favourity movies everywhere</Text>
                <Text style={styles.text2}>Browser through our Collection Browser through our Collection Browser through our Collection</Text>
                <Button style={styles.btn} title='Get Started' />
            </ImageBackground>

        </View>
    )
}

export default Started;

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 10,
        // backgroundColor: '#000000',

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        // opacity:'shadow',
    },
    text1: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 20,
        justifyContent: 'center'
    },
    text2: {
        fontSize: 18,
    },
    btn: {
        backgroundColor: '#fdd130',
        fontSize: 20,
    }
})