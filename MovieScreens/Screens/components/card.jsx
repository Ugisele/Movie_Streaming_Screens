import React from "react";
import { View,Image,Pressable, Text } from "react-native";

const Card = ({titleMov,imageMov,overView,navigation,onPress}) => {
     return(
         <Pressable onPress={onPress}>
             <View>
                 <Image source={{ uri: `https://image.tmdb.org/t/p/w500${imageMov}`}}  style={{width: 390,height:500}}/>
                 <View>
                     <Text style={{fontSize:20,color:'white'}}>{titleMov}</Text>
                     <Text style={{fontSize:20,color:'white'}}>{overView}</Text>
                 </View>
             </View>
         </Pressable>
     )

}
 export default Card;