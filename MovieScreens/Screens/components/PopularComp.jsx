import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, Pressable } from "react-native";
import Navigation from "../navigation";

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
        <View>
            <Pressable onPress={() =>
                            navigation.navigate('action')}>

            <Text style={{ position: 'absolute', top: '1%', right: '1%', backgroundColor: '#ffce2d', fontWeight: 'bold' }}>{title}</Text>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{ width: 370, height: 600, marginBottom: 10 }} />
            

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