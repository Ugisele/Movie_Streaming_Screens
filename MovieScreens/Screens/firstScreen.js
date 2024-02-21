import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View ,StatusBar} from 'react-native';

 const FirstScreen =() => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello World!</Text> */}
      <TouchableOpacity>
       <Image source={require('../assets/logo.png')} />
      </TouchableOpacity>
      
  
      <StatusBar style='light-content'/>
    </View>
  );
}

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize: 25,
  }
});