import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { Image } from "react-native-elements";
import Navigation from "../navigation";



// export const Slide = [
//     {
//         image:require('../../assets/home/5.jpg'),
//         rate: 8.8
//     },
//     {
//         image:require('../../assets/home/6.jpg'),
//         rate: 8.8

//     },
//     {
//         image:require('../../assets/home/three.jpg'),
//         rate: 8.8

//     },
//     {
//         image:require('../../assets/home/4.jpg'),
//         rate: 8.8

//     },

//   ]

const Gallery = ({ image, rate,navigation, press }) => {

    return (
        <View>
            <Pressable onPress={press}>

            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}`}} style={{ width: 120, height: 190, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '1%', right: '1%', backgroundColor: '#ffce2d', fontWeight: 'bold' }}> {rate}</Text>

            </Pressable>
           
        </View>
    )
}
export default  Gallery;