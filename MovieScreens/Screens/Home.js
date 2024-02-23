import React from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome'
import { Gallery, arrimages } from './components/card';




const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.log}>
                <Image source={require('../assets/logo (1).png')} />
                <TouchableOpacity>
                    <FontAwesome name="belle-o" />
                    <FontAwesome name="bookmark-o" />
                </TouchableOpacity>
            </View>
            <View >
                <ScrollView horizontal>
                    <Text>Features</Text>
                    <Text>Series</Text>
                    <Text>Films</Text>
                    <Text>Origins</Text>
                    <Text>Series</Text>
                    <Text>Films</Text>
                    <Text>Films</Text>
                </ScrollView>


            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                {/* {card.map((item, index) => (
                    <View key={index}>
                        <Card
                            image={item.image}
                            rate={item.rate}
                        />
                    </View>
                ))} */}

                {arrimages.map ((value,index) => 
                    <View key={index}>
                        
                            <Gallery
                        image={value.image}
                        rate={value.rate}
                            />
                            </View>) 
                    
                }

            </ScrollView>

        </View>

    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26282c',

    },
    log: {
        flexDirection: 'row',

    }

})
