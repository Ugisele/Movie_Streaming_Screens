import React from "react";
import { View,Text, } from "react-native";
import { Image } from "react-native-elements";


export const arrimages = [
    {
        image:require('../../assets/home/first.jpg'),
        rate: 8.8
        
    },
    {
        image:require('../../assets/home/sec.jpg'),
        rate: 8.8
        
    },
    {
        image:require('../../assets/home/three.jpg'),
        rate: 8.8
        
    },
    {
        image:require('../../assets/home/4.jpg'),
        rate: 8.8
        
    },
]

 const Gallery = ({ image, rate }) => {

    return (
        <View>
            <Image source={image} />
            <Text style={{position:'absolute', top:'5%',right:'5%',backgroundColor:'yellow'}}> {rate}</Text>
        </View>
    )
}
export default Gallery;