import React from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Gallery, { arrimages } from './components/NewRelease';
import { Slide } from './components/NewRelease';
import Popular, { Card } from './components/PopularMV';






const Home = ({navigation}) => {
    return (
        <View style={styles.container}>

            <StatusBar style='light' />
            <ScrollView>
                <View style={styles.log}>
                    <Image source={require('../assets/logo (1).png')} />

                    <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }}>
                        <FontAwesome name="bell-o" style={styles.logicon} size={23} />
                        <FontAwesome name="bookmark-o" style={styles.logicon} size={23} />
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} showsHorizontalScrollIndicatorStyle={{ marginBottom: 10, color: 'white' }}>
                        <View style={styles.scrollViewContent}  >
                            <Text style={styles.text1}>Features</Text>
                            <Text style={styles.text}>Series</Text>
                            <Text style={styles.text}>Films</Text>
                            <Text style={styles.text}>Origins</Text>
                            <Text style={styles.text}>Series</Text>
                            <Text style={styles.text}>Films</Text>
                            <Text style={styles.text}>Features</Text>
                            <Text style={styles.text}>Series</Text>
                            <Text style={styles.text}>Films</Text>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                        display
                            : 'flex', flexDirection: 'row', gap: 10, paddingHorizontal: 10, paddingVertical: 10
                    }}>
                        <Text style={styles.nav}>Popular movies</Text>
                        <Text style={styles.nav}>Rated</Text>
                        <Text style={styles.nav}>Marvel</Text>
                        <Text style={styles.nav}>Netflix</Text>
                        <Text style={styles.nav}>fan choice</Text>
                        <Text style={styles.nav}>Star watch</Text>

                    </ScrollView>
                </View>
                <View>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: '600', paddingHorizontal: 10, paddingVertical: 10 }}>New Release</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                        display: 'flex', flexDirection: 'row', gap: 10, paddingHorizontal: 10, paddingVertical: 10
                    }}>

                        {arrimages.map((item, index) => (
                            <View key={index}>
                                <Gallery image={item.image} rate={item.rate} />

                            </View>

                        ))}
                    </ScrollView>
                </View>
                <View>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: '600', paddingHorizontal: 10, paddingVertical: 10 }}>Made for you</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                        display: 'flex', flexDirection: 'row', gap: 10, paddingHorizontal: 10, paddingVertical: 10
                    }}>
                        {Slide.map((slide, index) => (
                            <View key={index}>
                                <Gallery image={slide.image} rate={slide.rate} />
                            </View>
                        ))}


                    </ScrollView>

                </View>
                <View>
                    <Text style={{ zIndex: 20, fontSize: 25, color: 'white', fontWeight: '600', paddingHorizontal: 10, paddingVertical: 10 }}>Popular movies</Text>
                    <ScrollView contentContainerStyle={{
                        display: 'flex',
                        flexDirection: 'column', gap: 10, paddingHorizontal: 10, paddingVertical: 10
                    }}>
                        {Card.map((pop, index) => (

                            <View key={index}>
                                <Popular image={pop.image} title='Best ' />

                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, marginTop: 5 }}>
                <TouchableOpacity onPress={() =>
                            navigation.navigate('search')}>
                    <FontAwesome name='home' size={25} color={'#ffce2d'} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name='search' size={25} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name='folder-o' size={25} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name='comment-o' size={25} color={'white'} />
                </TouchableOpacity>




            </View>

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26282c',
    },
    log: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    logicon: {
        marginRight: 10,
        color: 'white'

    },
    scrollViewContent: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        zIndex: 10,

    },
    text: {
        color: 'white',
        fontSize: 18,
        marginRight: 20,
    },
    text1: {
        color: '#ffce2d',
        fontSize: 18,
        marginRight: 20,
    },
    nav: {
        color: 'white',
        fontSize: 18,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#3b3d41',
        // width: 300,
        height: 35,
        paddingHorizontal: 1,
        paddingVertical: 5


    }

});