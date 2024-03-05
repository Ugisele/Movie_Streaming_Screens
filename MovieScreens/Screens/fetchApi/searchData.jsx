import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native';
import Gallery from '../components/MovieCardComp';
import axios from 'axios';

const handleFetch = () => {
    axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTJhZjJmZjIxZGI4OTg1NjU4MDU2YTBlN2I2YjU3MiIsInN1YiI6IjY1ZDg2YzI4MTQ5NTY1MDE3YmY2MDRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAl2DLnebn0Nk4yh1Gh7kZhOsK4BdJlzeBoNHWcZhrE'
        }
    }).then((response) => {
        // console.log(response);
        setSearch(response.data.results);
    }).catch((error) => {
        console.log(error);
    })
}

useEffect(() => {
    if (search.length > 0) {
        setSearch();
    } else {
        setSearchData();
    }
}, [searchData])
