import React from 'react';
import { StatusBar,Button, ImageBackground, StyleSheet, Text, View ,TouchableOpacity, ScrollView} from 'react-native';


const Started = () => {
    const image = { uri: 'https://i.pinimg.com/564x/b7/5a/b4/b75ab4ee8d9dd1f8efabf942eb84d68d.jpg' };

    return (

        <View style={styles.container}>
    
            <ImageBackground source={require('../assets/jocker.jpg')} resizeMode="cover" style={styles.image}>

            <View style={{position:'absolute', backgroundColor:'rgba(000,000,000,0.5)', height: "100%", display:'flex', justifyContent:'center'}}>

                <View style={{ height: 100 }}>

                </View>
                  <Text style={styles.text1}>Enjoy your favourity movies everywhere</Text>
                  <Text style={styles.text2}>
                    Browser through our Collection Browser through our Collection Browser through our Collection</Text>
                </View>

            </ImageBackground>

            <TouchableOpacity style={styles.btn} >
                <Text style={styles.btntext}>Get Started</Text>
            </TouchableOpacity>  
          
            <StatusBar style='light-content'/>

        </View>
    )
}

export default Started;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#000000',
        justifyContent: 'center',
        height: "100%"

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        // opacity:'shadow',
        resizeMode: 'cover',
        position: 'relative',

    },
    text1: {
        fontSize: 30,
        color: 'white',
        fontWeight: '500',
        marginBottom: 20,
        justifyContent: 'center',
    },
    text2: {
        fontSize: 15,
        color: 'white',
    },
    btn:{
        backgroundColor: '#fdd130',
        width: '99%',
        height: 40,
        justifyContent: 'center', 
        alignContent: 'center',
        borderRadius: 10
    },
    btntext:{
        fontSize: 18,
        textAlign: 'center',
        

    }

})