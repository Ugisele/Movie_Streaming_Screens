import React from "react";
import Navigation from "./Screens/navigation";


import Home from "./Screens/Home";
import Search from "./Screens/Search";
import SearchError from "./Screens/SearchError";
import MyFetch from "./Screens/fetchApi/NewRelease";
import { StatusBar } from "react-native";
import HorizontalCard from "./Screens/fetchApi/NewRelease";
HorizontalCard


export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      {/*  */}
      {/* < Home /> */}

      <Navigation /> 

      {/* <MyFetch/>
 */}



      {/* //<Search/> */}
      {/* <SearchError/>  */}

    </>


  )

}

