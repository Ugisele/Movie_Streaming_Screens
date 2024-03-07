import React from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { FontAwesome,Feather } from '@expo/vector-icons';
import NewRelease from './fetchApi/NewRelease';
import PopularMuvi from './fetchApi/Popular';
import TrendingMuvi from './fetchApi/Trending';
import { BottomTabNav } from './navigation';


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <StatusBar style='light' />
            <ScrollView>
                <View style={styles.log}>
                    <Image source={require('../assets/logo.png')} />

                    <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }}>
                        <FontAwesome name="bell-o" style={styles.logicon} size={23} />
                        <FontAwesome name="bookmark-o" style={styles.logicon} size={23} />
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} showsHorizontalScrollIndicatorStyle={{ marginBottom: 10, color: 'white' }}>
                        <View style={styles.scrollViewContent}  >
                            <Text style={styles.text1}>Features</Text>
                            <Text style={styles.text}>Series</Text>
                            <Text style={styles.text}>Films</Text>
                            <Text style={styles.text}>Origins</Text>
                            <Text style={styles.text}>Series</Text>
                            <Text style={styles.text}>Films</Text>
                            <Text style={styles.text}>Features</Text>
                            <Text style={styles.text}>Series</Text>
                            <Text style={styles.text}>Films</Text>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                        display
                            : 'flex', flexDirection: 'row', gap: 10, paddingHorizontal: 10, paddingVertical: 10
                    }}>
                        <Text style={styles.nav}>Popular movies</Text>
                        <Text style={styles.nav}>Rated</Text>
                        <Text style={styles.nav}>Marvel</Text>
                        <Text style={styles.nav}>Netflix</Text>
                        <Text style={styles.nav}>fan choice</Text>
                        <Text style={styles.nav}>Star watch</Text>

                    </ScrollView>
                </View>
                <View>

                    <Text style={{ fontSize: 25, color: 'white', fontWeight: '600', paddingHorizontal: 10, paddingVertical: 10 }}>New Release</Text>
                    
                    {/* <TrendingMuvi /> */}

                </View>
                <View>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: '600', paddingHorizontal: 10, paddingVertical: 10 }}>Made for you</Text>

                    <NewRelease />

                </View>
                <View>
                    <Text style={{ zIndex: 20, fontSize: 25, color: 'white', fontWeight: '600', paddingHorizontal: 10, paddingVertical: 10 }}>Popular movies</Text>
                    <PopularMuvi />
                </View>
            </ScrollView>

            {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, marginTop: 5 }}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('home')}>
                    <FontAwesome name='home' size={25} color={'#ffce2d'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('search')}>
                    <FontAwesome name='search' size={25} color={'#dbdddd'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('action')}>
                    <FontAwesome name='folder-o' size={25} color={'#dbdddd'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('list')}>
                    <Feather name='grid' size={25} color={'#dbdddd'} />
                </TouchableOpacity>

            </View> */}

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26282c',
    },
    log: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    logicon: {
        marginRight: 10,
        color: 'white'

    },
    scrollViewContent: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        zIndex: 10,

    },
    text: {
        color: 'white',
        fontSize: 18,
        marginRight: 20,
    },
    text1: {
        color: '#ffce2d',
        fontSize: 18,
        marginRight: 20,
    },
    nav: {
        color: 'white',
        fontSize: 18,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#3b3d41',
        // width: 300,
        height: 35,
        paddingHorizontal: 1,
        paddingVertical: 5


    }

});