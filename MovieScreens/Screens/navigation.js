import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { Icon } from "react-native-elements";


import FirstScreen from "./firstScreen";
import Started from "./getStarted";
import Welcome from "./welcome";
import Signin from "./Signin";
import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import Search from "./Search";
import SearchError from "./SearchError";
import List from "./myList";
import Action from "./Action";
import { color } from "react-native-elements/dist/helpers";
import NewRelease from "./fetchApi/NewRelease";
import Gallery from "./components/GalleryComp";
import Trending from "./components/trendingComp";
import Popular from "./components/PopularComp";
import Profile from "./Profile";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function Navigation (){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="gestarted">

                <Stack.Screen name="first" component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name="getstarted" component={Started} options={{ headerShown: false }} />
                <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Registration} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={BottomTabNav} options={{ headerShown: false }} />
                <Stack.Screen name="action" component={Action} options={{ headerShown: false }} />
                <Stack.Screen name="gallery" component={Gallery} options={{ headerShown: false }} />
                <Stack.Screen name="popular" component={Popular} options={{ headerShown: false }} />
                <Stack.Screen name="trending" component={Trending} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export const BottomTabNav = () => {

    return (
        <Tab.Navigator screenOptions={{tabBarLabel:'',tabBarStyle:{backgroundColor:'#26282c'}}} >
            <Tab.Screen
                name="hometab"
                component={Home}
                options={{headerShown:false, tabBarIcon:() =><Icon name="home-outline" type="material-community" size={30} color={'#dbdddd'}/>}}
            />
            <Tab.Screen
                name="searchtab"
                component={Search}
                options={{headerShown:false, tabBarIcon:() =><Icon name="magnify" type="material-community" size={30} color={'#dbdddd'}/>}}
            />
            <Tab.Screen
                name="listtab"
                component={List}
                options={{headerShown:false, tabBarIcon:() =><Icon name="folder-outline" type="material-community" size={30} color={'#dbdddd'}/>}} 
            />
            <Tab.Screen
                name="profiletab"
                component={Profile}
                options={{headerShown:false,tabBarIcon:() =><Icon name="account-outline" type="material-community" size={30} color={'#dbdddd'}/>}}               
            />
        </Tab.Navigator>
   )
}