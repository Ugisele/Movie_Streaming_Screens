import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

 const FirstScreen =() => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello World!</Text> */}
      <Image source={require('./assets/logo.png')} />
  
      <StatusBar style={{backgroundColor:'#ffffff'}}/>
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