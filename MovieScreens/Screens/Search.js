import React from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Gallery, { arrimages } from './components/MovieCardComp';
import { Slide } from './components/MovieCardComp';
import Popular, { Card } from './components/PopularComp';
import TextInputComponent from './components/TextInput';
import { TextInput } from 'react-native-paper';
import NewRelease from './fetchApi/NewRelease';
import PopularMuvi from './fetchApi/Popular';
import TrendingMuvi from './fetchApi/Trending';







const Search = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <StatusBar style='light' />
            <ScrollView>

                <View>
                    <TextInputComponent


                        label="Search"
                        placeholder="Type your suggestion movies or genrle"
                        placeholderTextColor={'#313334'}
                        mode="flat"
                        IconName={() => <MaterialIcons name="search" size={30} color="#93804b" />}
                    />



                </View>



                <View>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: '600', }}>Search History</Text>

                    <TrendingMuvi />

                </View>
                <View>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: '600', }}>Top Search</Text>

                    <NewRelease />

                </View>
                <View>
                    <Text style={{ zIndex: 20, fontSize: 25, color: 'white', fontWeight: '600', }}>Your Daily mixes</Text>

                    <PopularMuvi />

                </View>
            </ScrollView>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, marginTop: 5 }}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('home')}>
                    <FontAwesome name='home' size={25} color={'#dbdddd'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('search')}>
                    <FontAwesome name='search' size={25} color={'#ffce2d'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('searcherror')}>
                    <FontAwesome name='folder-o' size={25} color={'#dbdddd'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('first')}>
                    <FontAwesome name='comment-o' size={25} color={'#dbdddd'} />
                    {/* <AntDesign name='appstore-o' size={25} color={'white'}/> */}
                </TouchableOpacity>

            </View>

        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26282c',
        paddingHorizontal: 10,
        paddingVertical: 10
    },


});