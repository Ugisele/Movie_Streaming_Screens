import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";

const Trending = ({ image, rate }) => {

    return (
        <View>
            <TouchableOpacity>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{ width: 120, height: 180, borderRadius: 10 }} />
                <Text style={{ position: 'absolute', top: '1%', right: '1%', backgroundColor: '#ffce2d', fontWeight: 'bold' }}> {rate}</Text>
            </TouchableOpacity>
            
            
        </View>
    )
}
export default  Trending;