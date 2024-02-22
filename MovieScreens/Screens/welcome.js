import React from 'react';
import { StatusBar,
    Button, 
    ImageBackground,
     StyleSheet,
     Text,
     View ,
    TouchableOpacity, 
    
    ScrollView,
    Image} from 'react-native';

    const Welcome = ({navigation}) =>{
        return(
            
        <View style={styles.container} >
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')}/>
            </View>
                
            <View style={styles.image}>
                <Image source={require('../assets/muvi.png')}/>
            </View>
            <View>
                <Text style={styles.text1}>Welcome to Movie</Text>
                <Text style={styles.text2}>free movie streming all your needs everytime and everywhere</Text>
            </View>
             <TouchableOpacity style={styles.btn} onPress={() =>
        navigation.navigate('signin')
      }>
                <Text>Watch movies</Text>
             </TouchableOpacity>
             <TouchableOpacity>
                <Text style={{textAlign:'center', fontSize: 15,color: 'white'}}>sign in</Text>
             </TouchableOpacity>
        
             <StatusBar style='light-content'/>
         </View>
        )
    }
    export default Welcome;

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#26282c',
            // paddingHorizontal: 10,
            // paddingVertical: 10       
         },
         logo:{
             alignItems: 'center',
             marginBottom: 100,
             backgroundColor:"#000000"

         },
         image:{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',  
            marginBottom: 80
         },
         text1:{
            fontSize: 30,
            color: 'white',
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10
         },
         text2:{
            fontSize: 15,
            color: '#D9D9DA',
            textAlign: 'center',
            marginBottom: 80
         },
         btn:{
            backgroundColor:'#fdd130',
            width: '97%',
            height: 40,
            marginBottom: 20,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 10,
            marginLeft: 4,
         },


    })