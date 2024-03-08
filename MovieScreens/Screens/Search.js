import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text, StatusBar, FlatList } from 'react-native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import Gallery, { arrimages } from './components/GalleryComp';
import { Slide } from './components/GalleryComp';
// import Popular, { Card } from './components/PopularComp';
import TextInputComponent from './components/TextInput';
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
                                    navigation.navigate('action', {movie:item})
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