import React from "react";
import { View,Text } from "react-native";
import { Image } from "react-native-elements";


export const Slide = [
    {
        image:require('../../assets/home/5.jpg'),
        rate: 8.8
        
    },
    {
        image:require('../../assets/home/6.jpg'),
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
            <Image source={image} style={{width:300,height:200,borderRadius:10}} />
            <Text style={{position:'absolute', top:'1%',right:'1%',backgroundColor:'#ffce2d',fontWeight: 'bold'}}> {rate}</Text>
        </View>
    )
}
export default Gallery;