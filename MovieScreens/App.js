import React from "react";
import Navigation from "./Screens/navigation";


import Home from "./Screens/Home";
import Search from "./Screens/Search";
import SearchError from "./Screens/SearchError";
import MyFetch from "./Screens/fetchApi/NewRelease";
import { StatusBar } from "react-native";
import HorizontalCard from "./Screens/fetchApi/NewRelease";
import { ActivityIndicator } from "react-native-paper";
import List from "./Screens/myList";
import Action from "./Screens/Action";
import InputText from "./Screens/components/validation";
import Signin from "./Screens/Signin";
import Login from "./Screens/Login";
import Profile from "./Screens/Profile";
import { ThemeProviderIntoLightMode } from "./Screens/context/themeContex";






export default function App() {
  return (
    <>
      <StatusBar style='auto' />


      {/* <ActivityIndicator
      animating={true}
      color="blue"
      /> */}


      {/*  */}

      {/* <CurrencyConverter/> */}

      {/* < Home /> */}

      <ThemeProviderIntoLightMode>
        
      <Navigation /> 

      </ThemeProviderIntoLightMode>

       

       
       {/* <InputText/>*/}

       {/* <Profile/> */}

        {/* <Signin/> */}

       {/* <Action />  */}

      {/* <List/> */}

      {/* <MyFetch/>*/}

     {/* <Search/>  */}

      {/* <SearchError/>  */}
      
    {/* <Login/> */}
    </>

  )

}

