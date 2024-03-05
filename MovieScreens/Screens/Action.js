import React , {useEffect ,useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, ScrollView } from "react-native";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import NewRelease from './fetchApi/NewRelease';
import Trending from "./components/trendingComp";
import Navigation from "./navigation";
import TrendingMuvi from "./fetchApi/Trending";
import YoutubePlayer from'react-native-youtube-iframe'

const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

const Action = ({ navigation, route }) => {
    console.log(route);

    const rout = route.params

    const [isPlaying,setIsPlaying]= useState([])

    useEffect(() => {
        HandleVideo()
    })

    const HandleVideo =() =>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTJhZjJmZjIxZGI4OTg1NjU4MDU2YTBlN2I2YjU3MiIsInN1YiI6IjY1ZDg2YzI4MTQ5NTY1MDE3YmY2MDRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAl2DLnebn0Nk4yh1Gh7kZhOsK4BdJlzeBoNHWcZhrE'
            }
        };

        fetch(
            `https://api.themoviedb.org/3/movie/${rout.id}/videos?language=en-US`,
            options
          )
            .then((response) => response.json())
            .then((response) => {
              if (response.results && response.results.length > 0) {
                setIsPlaying(response.results[0].key);
              } else {
                console.error("No video key found in the API response");
              }
            })
            .catch((err) => console.error(err));
        };
      
    

    return (
        <View style={{ display: 'flex', height: height, width: width, }}>
            <YoutubePlayer
                        height={225}
                        videoId={isPlaying}
            />
            
                <ScrollView>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>


                        {/* <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${rout.poster_path}` }} style={styles.image} /> */}
                        <TouchableOpacity style={{ paddingVertical: 15, display: 'flex', flexDirection: 'row', gap: 10, position: 'absolute' }} >

                            <AntDesign name="arrowleft" size={30} color="#d5b445" />
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Action</Text>

                        </TouchableOpacity>

                    </View>
                    <LinearGradient colors={['#222428', '#26282b', '#26282b']} >


                        <View style={{ paddingVertical: 1, paddingHorizontal: 10 }}>
                            <Text style={{ color: '#d5d2d1', fontSize: 20, fontWeight: 'bold', }}>{rout.title}</Text>
                            <Text style={{ color: '#757c7e', fontSize: 14, marginTop: 10 }}>{rout.overview}</Text>

                            <View style={{ paddingVertical: 20, flexDirection: 'row', gap: 30 }}>
                                <TouchableOpacity nPress={() => navigation.navigate('action')}
                                    style={{ paddingVertical: 10, backgroundColor: '#fdd130', flexDirection: 'row', alignItems: 'center', gap: 8, width: 170, padding: 6, borderRadius: 10 }}>
                                    <Feather name="play" size={25} />
                                    <Text style={{ fontSize: 18 }}>Play</Text>

                                </TouchableOpacity>
                                <TouchableOpacity nPress={() =>
                                    navigation.navigate('list')}
                                    style={{ paddingVertical: 10, backgroundColor: '#434549', flexDirection: 'row', alignItems: 'center', gap: 8, width: 170, padding: 6, borderRadius: 10 }}>
                                    <Feather name="plus" size={25} color={'#9e904f'} />
                                    <Text style={{ fontSize: 18, color: '#d5d2d1', }}>My List</Text>

                                </TouchableOpacity>

                            </View>

                            <View>
                                <NewRelease />
                            </View>
                            <View>
                                <TrendingMuvi />

                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', marginBottom: 1, marginTop: 5 }}>

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
                                    <Feather name='grid' size={25} color={'#dbdddd'} />
                                </TouchableOpacity>

                            </View>
                        </View>

                    </LinearGradient>

                </ScrollView>

        </View>
    )
}

export default Action;

const styles = StyleSheet.create({

    image: {

        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        position: 'relative',
        justifyContent: 'center',
        height: 354,
        // backgroundColor: 'rgba(0, 0, 0, 0.9'
    },

})