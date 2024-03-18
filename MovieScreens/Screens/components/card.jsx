import React from "react";
import { View,Image,Pressable, Text } from "react-native";

const Card = ({titleMov,imageMov,overView,navigation,onPress}) => {
     return(
         <Pressable onPress={onPress}>
             <View>
                 <Image source={{ uri: `https://image.tmdb.org/t/p/w500${imageMov}`}}  style={{width: 390,height:500}}/>
                 <View>
                     <Text style={{color: '#d5d2d1', fontSize: 24, fontWeight: 'bold',marginTop: 8 }}>{titleMov}</Text>
                     <Text style={{color: '#757c7e', fontSize:14 , marginTop: 8,marginBottom:15,fontStyle:'italic'}}>{overView}</Text>
                 </View>
             </View>
         </Pressable>
     )
}
 export default Card;
 