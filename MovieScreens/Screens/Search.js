import React from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Gallery, { arrimages } from './components/NewRelease';
import { Slide } from './components/NewRelease';
import Popular, { Card } from './components/PopularMV';
import TextInputComponent from './components/TextInput';
import { TextInput } from 'react-native-paper';






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
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                        display: 'flex', flexDirection: 'row', gap: 10,
                    }}>

                        {arrimages.map((item, index) => (
                            <View key={index}>
                                <Gallery image={item.image} rate={item.rate} />

                            </View>

                        ))}
                    </ScrollView>
                </View>
                <View>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: '600', }}>Top Search</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                        display: 'flex', flexDirection: 'row', gap: 10,
                    }}>
                        {Slide.map((slide, index) => (
                            <View key={index}>
                                <Gallery image={slide.image} rate={slide.rate} />
                            </View>
                        ))}


                    </ScrollView>

                </View>
                <View>
                    <Text style={{ zIndex: 20, fontSize: 25, color: 'white', fontWeight: '600', }}>Your Daily mixes</Text>
                    <ScrollView contentContainerStyle={{
                        display: 'flex',
                        flexDirection: 'column', gap: 10,
                    }}>
                        {Card.map((pop, index) => (

                            <View key={index}>
                                <Popular image={pop.image} title='Best ' />

                            </View>
                        ))}
                    </ScrollView>
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