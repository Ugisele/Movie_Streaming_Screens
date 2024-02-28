import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements";

const Trending = ({ image, rate }) => {

    return (
        <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{ width: 315, height: 470, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '1%', right: '1%', backgroundColor: '#ffce2d', fontWeight: 'bold' }}> {rate}</Text>
        </View>
    )
}
export default  Trending;