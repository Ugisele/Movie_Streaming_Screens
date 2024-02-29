import * as React from "react";
import { View,ImageBackground,Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";


const Action =() => {

    return(
        <View>
            <View style={{display:'flex',flexDirection:'row',gap: 10}}>

                <AntDesign name="arrowleft" size={25} color="#d5b445"/>
                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Action</Text>

            </View>
            <View>
                <ImageBackground source={require('./assets/home/no.jpg')}/>
            </View>
        </View>
    )
}