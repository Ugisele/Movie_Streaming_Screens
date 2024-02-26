import React, { useEffect, useState } from 'react'
import Gallery from '../components/NewRelease'
import { FlatList,View,Text} from 'react-native';


export default function MyFetch () {
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

  useEffect(()=>{

  })

  const [img,myGallery,rate] = useState([])

  return (

    <View style={{backgroundColor:'black'}}>
    <Text style={{ fontSize: 30, color: 'white', fontWeight: '600', paddingHorizontal: 40, paddingVertical: 40 }}>New Release</Text>
    <FlatList 
    horizontal={true} 
    showsVerticalScrollIndicator={true}
    contentContainerStyle={{display: 'flex', flexDirection: 'row', gap: 10, paddingHorizontal: 10, paddingVertical: 10}}
    data={img}
    keyExtractor={item => {
      return item.id
    }}
    renderItem={ post  => {

      const item = post .item
      return(

        <Gallery image={item.poster_path} rate={item.rate} />
      )
    }
      }

    />
</View>
  )

}

