import React from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import Popular, { Card, PopularError } from './components/PopularMV';
import TextInputComponent from './components/TextInput';
import NewRelease from './fetchApi/NewRelease';
import TrendingMuvi from './fetchApi/Trending';







const SearchError = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <StatusBar style='light' />
            <ScrollView>

            <View style={{ paddingVertical: 15, }}>
                <TextInputComponent


                    label="Search"
                    placeholder="Type your suggestion movies or genrle"
                    placeholderTextColor={'#313334'}
                    mode="flat"
                    IconName={() => <MaterialIcons name="search" size={30} color="#93804b" />}
                />



            </View>

            <View style={{
                height: 355, width: '100%', display: 'flex',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Image source={require('../assets/searcherror.png')} style={{ width: 100 }} />
                <Text style={{ fontSize: 25, fontWeight: '600', marginTop: 20, color: '#dbdddd' }}>Search any Movie</Text>
                <Text style={{ fontSize: 18, marginTop: 10, textAlign: 'center', paddingHorizontal: 10, color: '#7d7e82' }}>Explore our libraries and enjoy this movie with your family</Text>
            </View>

            <View >
                <Text style={{ fontSize: 25, color: '#dbdddd', fontWeight: '600', color: '#dbdddd' }}>Your Daily mixes</Text>
                {/* <ScrollView horizontal={true} contentContainerStyle={{
                        display: 'flex',
                        flexDirection: 'row', gap: 20,
                    }}>
                        {Card.map((pop, index) => (

                            <View key={index}>
                                <PopularError image={pop.image} title='Best ' />

                            </View>
                        ))}
                    </ScrollView> */}

                <TrendingMuvi />

            </View>


            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('home')}>
                    <FontAwesome name='home' size={25} color={'#dbdddd'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('search')}>
                    <FontAwesome name='search' size={25} color={'#dbdddd'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('action')}>
                    <FontAwesome name='folder-o' size={25} color={'#ffce2d'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('list')}>
                    <FontAwesome name='comment-o' size={25} color={'#dbdddd'} />
                </TouchableOpacity>

            </View>


            </ScrollView>


           



        </View>

    )
}
export default SearchError;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26282c',
        paddingHorizontal: 10,
        paddingVertical: 0,
    },


});