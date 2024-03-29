import React , {useEffect ,useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView,Linking } from "react-native";
import { AntDesign, Feather,FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import NewRelease from './fetchApi/NewRelease';
import TrendingMuvi from "./fetchApi/Trending";
import YoutubePlayer from'react-native-youtube-iframe'

export const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const openURL = async (url) =>{
    const isSupported = await  Linking.canOpenURL(url);
    if (isSupported) {
        Linking.openURL(url);
    } else {
        console.log("Can't handle url: " + url);
    }
}

const Action = ({ navigation, route }) => {
    console.log(route);

    const {movie} = route.params

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

        fetch( `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, options)
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
        <View style={{ display: 'flex', height: height, width: width, paddingVertical:20}}>
              <ScrollView>
            <YoutubePlayer
                        height={220}
                        videoId={isPlaying}
            />

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>

                        {/* <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.image} /> */}
                        <TouchableOpacity style={{ paddingVertical: 40, display: 'flex', flexDirection: 'row', gap: 10, position: 'absolute' }} >
                            {/* <AntDesign name="arrowleft" size={30} color="#d5b445" />
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Action</Text> */}
                        </TouchableOpacity>

                    </View>
                    <LinearGradient colors={['#222428', '#26282b', '#26282b']} >

                        <View style={{ paddingVertical: 1, paddingHorizontal: 10 }}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ color: '#d5d2d1', fontSize: 24, fontWeight: 'bold',marginBottom:5 }}>{movie.title}</Text>
                            <FontAwesome name="whatsapp" size={30} color="green" 
                             onPress={()=> { 
                                Linking.openURL('whatsapp://Send?text=Send')
                             }}
                            />

                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ color: '#757c7e', fontSize: 12, marginTop: 10,fontStyle:'italic' }}>{movie.overview}</Text>

                            <AntDesign name="message1" size={25} color="blue" 
                             onPress={()=> { 
                                Linking.openURL('whatsapp://Send?text=Send')
                             }}
                            />
                            </View>
                           
                            <View style={{ paddingVertical: 20, flexDirection: 'row', gap: 30 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('action')}
                                    style={{ paddingVertical: 10, backgroundColor: '#fdd130', flexDirection: 'row', alignItems: 'center', gap: 8, width: 170, padding: 6, borderRadius: 10 }}>
                                    <Feather name="play" size={25} />
                                    <Text style={{ fontSize: 18 }}>Play</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
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