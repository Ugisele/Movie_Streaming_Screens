import React from "react";
import Navigation from "./Screens/navigation";


import Home from "./Screens/Home";
import Search from "./Screens/Search";
import SearchError from "./Screens/SearchError";
import MyFetch from "./Screens/fetchApi/movieAPI";
import { StatusBar } from "react-native";


export default function App() {
  return (
    <>
      <StatusBar  style='auto'/>
{/*  */}
{/* //< Home/>   */}

{/* //<Navigation />  */}

<MyFetch/>

{/* //<Search/> */}
 {/* <SearchError/>  */}

    </>
  

  )

}

