import React from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image,picker} from 'react-native';
import { TextInput } from 'react-native-paper'
import TextInputComponent from './components/TextInput';
import Button from './components/button';
import { FontAwesome } from '@expo/vector-icons';


const Logout = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ paddingHorizontal: 125, paddingVertical: 20,display:'flex', }}>

                <Image style={{height:100,width:100,borderRadius:50,justifyContent:'center',alignContent:'center'}} source={require('../assets/img 1.jpeg')} />
                <View style={{display:'flex',flexDirection:'row',gap:4,marginTop:15,borderWidth:2,borderColor:'#626263',borderRadius:10,width:145,padding:7}}>
                    <FontAwesome name='edit' size={25} color={'#7c6537'}/>
                    <Text style={{fontSize: 15,color:'#adaeaf'}}> Edit Profile</Text>
                </View>

            </View>           
            <TextInput style={styles.input}
                mode="flat"
                placeholder='Inbox' placeholderTextColor={'#adaeaf'}
                left={<TextInput.Icon icon={'email-outline'} color='#7c6537' />}

            />
            <TextInput style={styles.input}
                secureTextEntry
                mode="flat"
                placeholder='Account settings' placeholderTextColor={'#adaeaf'}
                left={<TextInput.Icon icon={'account-outline'} color='#7c6537' />}

            />
             <TextInput style={styles.input}
                secureTextEntry
                mode="flat"
                placeholder='Password' placeholderTextColor={'#adaeaf'}
                left={<TextInput.Icon icon={'lock-outline'} color='#7c6537' />}

            />
             <TextInput style={styles.input}
                secureTextEntry
                mode="flat"
                placeholder='*********' placeholderTextColor={'#adaeaf'}
                left={<TextInput.Icon icon={'lock-outline'} color='#7c6537' />}

            />
            <Text style={{color:'#adaeaf',fontSize:15,marginTop:10,}}>Terms and conditions</Text>
            <Text style={{color:'#adaeaf',fontSize:15,marginTop:15,}}>Privacy & policy</Text>
          
            <TouchableOpacity style={{backgroundColor:'transparent',borderWidth:1,marginTop:60,padding:10, borderRadius:20}}>

                <Text style={{fontSize:20,fontWeight:'600', textAlign:'center',color: '#af6259'}}>Logout</Text>

            </TouchableOpacity>
            
            <StatusBar style='auto'/>

        </View>
    )
}
export default Logout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f2123',
        paddingHorizontal: 15,
        paddingVertical: 20,
        // justifyContent: 'center',

    },

    input: {
        
        borderRadius: 10,
        backgroundColor: 'transparent',
        marginBottom: 10,
    },
    inputext: {
        fontSize: 15,
        // paddingVertical: 10,
        color: '#98999c'

    },
   
})