import React, { useEffect, useState } from 'react'
import { FlatList, View, Pressable } from 'react-native';
import Gallery from '../components/GalleryComp';
import axios from 'axios';
import Action from '../Action';


export default function NewRelease({ navigation }) {
 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTJhZjJmZjIxZGI4OTg1NjU4MDU2YTBlN2I2YjU3MiIsInN1YiI6IjY1ZDg2YzI4MTQ5NTY1MDE3YmY2MDRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAl2DLnebn0Nk4yh1Gh7kZhOsK4BdJlzeBoNHWcZhrE'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => myGallery(response.results))
    .catch(err => console.error(err));

  useEffect(() => {

  })

  const [img, myGallery] = useState([])

  return (

    <View>

      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10, paddingVertical: 10 }}
        data={img}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={post => {
          const item = post.item
          return (
            <>
              <Pressable press={() =>
                navigation.navigate('action', {movie:item})}>
                <Gallery image={item.poster_path} rate={item.original_title} />
              </Pressable>
              
            </>

          )
        }
        }
      />
    </View>
  )

}

