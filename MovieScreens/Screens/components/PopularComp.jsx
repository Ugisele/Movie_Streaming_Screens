import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, Pressable } from "react-native";


// export const Card = [
//     {
//         image: require('../../assets/home/p1.jpg'),
//         title: ''
//     },
//     {
//         image: require('../../assets/home/p2.jpg'),
//         title: ''
//     },
//     {
//         image: require('../../assets/home/p3.jpg'),
//         title: ''
//     },
//     {
//         image: require('../../assets/home/p4.jpg'),
//         title: ''
//     },
// ]

const Popular = ({ image, title,navigation }) => {
    return (
        <View style={{paddingHorizontal:4}}>
            <Pressable >
            
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}`}} style={{ width: 380, height: 600, marginBottom: 10,position:'relative'}} />
           {/* <Text style={{ position: 'absolute',right: 5,top: 1, backgroundColor: '#ffce2d', fontWeight: 'bold' }}>{title}</Text> */}

            </Pressable>
            {/* <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{ width: '90%', height: 220, borderRadius: 10, marginBottom: 10, }} /> */}
            

        </View>
    )
}
export default Popular;

export const PopularError = ({ image, title }) => {
    return (
        <View>
            <Image source={image} style={{ width: 300, height: 180, borderRadius: 10, marginBottom: 10, position: 'relative' }} />
            <Text style={{ top: "3%", position: 'absolute', backgroundColor: '#ffce2d', fontWeight: 'bold', right: 5 }}>{title}</Text>
        </View>
    )
}