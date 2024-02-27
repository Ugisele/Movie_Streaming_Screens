import React from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import Popular, { Card, PopularError } from './components/PopularMV';
import TextInputComponent from './components/TextInput';
import NewRelease from './fetchApi/NewRelease';
import TrendingMuvi from './fetchApi/Trending';







const List = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <StatusBar style='light' />
            <ScrollView>

            <View style={{ paddingVertical: 15, }}>
               <Text style= {{fontSize: 30, fontWeight: '800', color: '#dbdddd'}}>My List</Text>

            </View>

            <View style={{
                height: 380, width: '100%', display: 'flex',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Image source={require('../assets/list.png')} style={{ width: 100 }} />
                <Text style={{ fontSize: 25, fontWeight: '600', marginTop: 20, color: '#dbdddd' }}>Create my own list</Text>
                <Text style={{ fontSize: 18, marginTop: 10, textAlign: 'center', paddingHorizontal: 10, color: '#7d7e82' }}>Explore our libraries and enjoy this movie with your family</Text>
            </View>
            </ScrollView>

            <TouchableOpacity style={styles.btn} onPress={() =>
                navigation.navigate('first')
            }>
                <Text style={styles.btntext}>Explore Movie</Text>
            </TouchableOpacity>
            </View>
    )}

    export default List;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#26282c',
            paddingHorizontal: 10,
            paddingVertical: 0,
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
    
    
    });
