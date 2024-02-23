import React from "react";
import { View,Text,Image } from "react-native";

export const Card = [
    {
        image: require('../../assets/home/p1.jpg'),
        title: 'Best movie'
    },
    {
        image: require('../../assets/home/p2.jpg'),
        title: 'Best movie'
    },
    {
        image: require('../../assets/home/p3.jpg'),
        title: 'Best movie'
    },
    {
        image: require('../../assets/home/p4.jpg'),
        title: 6
    },
]

const Popular= ({image,title}) =>{
    return(
        <View>
            <Image source={image} style={{width: '100%',height: 220,borderRadius:10,marginBottom:10,position:'relative'}}/>
            <Text style={{top:"3%",position:'absolute',backgroundColor:'#ffce2d',fontWeight: 'bold',right:5}}>{title}</Text>
        </View>
    )
}
export default Popular;