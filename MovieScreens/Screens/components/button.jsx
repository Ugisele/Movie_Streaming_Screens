import * as React from "react";
import { View,TouchableOpacity,Text,StyleSheet } from "react-native";


const Button = ({title})=>{
    return(
        <View style={styles.btn} >
            <Text style={styles.btntext}>{title}</Text>
        </View>
    )
}
 export default Button;

 const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#fdd130',
        height: 50,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        top:2
        // marginLeft: 4,
    },
    btntext: {
        fontSize: 20,

    },

 })

 