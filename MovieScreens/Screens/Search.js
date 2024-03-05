import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text, StatusBar, FlatList } from 'react-native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import Gallery, { arrimages } from './components/GalleryComp';
import { Slide } from './components/GalleryComp';
// import Popular, { Card } from './components/PopularComp';
import TextInputComponent from './components/TextInput';
import { TextInput } from 'react-native-paper';
import NewRelease from './fetchApi/NewRelease';
import PopularMuvi from './fetchApi/Popular';
import TrendingMuvi from './fetchApi/Trending';
import Card from './components/card'



const Search = ({ navigation }) => {

    const [search, setSearch] = useState([])
    const [searchData, setSearchData] = useState('')


    useEffect(() => {
        if (searchData.length > 0) {
            handleSearch()

        } else {
            setSearch([])
        }
    }, [searchData])


    const handleSearch = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTJhZjJmZjIxZGI4OTg1NjU4MDU2YTBlN2I2YjU3MiIsInN1YiI6IjY1ZDg2YzI4MTQ5NTY1MDE3YmY2MDRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAl2DLnebn0Nk4yh1Gh7kZhOsK4BdJlzeBoNHWcZhrE'
            }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchData}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                setSearch(response.results)

                // console.log(response.results)
            })
            .catch(err => console.error(err));

    }

    return (
        <View style={styles.container}>

            <StatusBar style='light' />


            <View>
                <TextInputComponent

                    label="Search"
                    placeholder="Type your suggestion movies or genrle"
                    placeholderTextColor={'#313334'}
                    mode="flat"
                    value={searchData}
                    onChangeText={(e) => { setSearchData(e) }}
                    IconName={() => <MaterialIcons name="search" size={30} color="#93804b" />}
                />

            </View>

            {/* {search.length == ' ' ? (
                <>
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
                </>
            ) : (
                <FlatList
                    data={search}
                    renderItem={({ item }) => (
                        <>
                            <View>
                                <Card
                                    imageMov={item.poster_path}
                                    titleMov={item.original_title}
                                    overView={item.overview}
                                    onPress={() => {
                                        navigation.navigate('action', item)
                                    }}
                                    keyExtrator={(item, index) => index.toString()}
                                />
                            </View>
                        </>
                    )}
                />
            )} */}

            <FlatList
                data={search}
                renderItem={({ item }) => (
                    <>
                        <View>
                            <Card
                                imageMov={item.poster_path}
                                titleMov={item.original_title}
                                overView={item.overview}
                                onPress={() => {
                                    navigation.navigate('action', item)
                                }}
                                keyExtrator={(item, index) => index.toString()}
                            />

                        </View>
                    </>

                )}

            />


            {/* <View>
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

                </View> */}

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
                    navigation.navigate('action')}>
                    <FontAwesome name='folder-o' size={25} color={'#dbdddd'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('list')}>
                    <Feather name='grid' size={25} color={'#dbdddd'} />
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
        paddingHorizontal: 5,
        paddingVertical: 10
    },
});