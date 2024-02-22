import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello World!</Text> */}
      <TouchableOpacity onPress={() =>
        navigation.navigate('getstarted')
      }
      >
        <Image source={require('../assets/logo (1).png')} />
      </TouchableOpacity>


      <StatusBar style='light' />
    </View>
  );
}

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
  }
});