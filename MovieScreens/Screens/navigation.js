import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { Icon } from "react-native-elements";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


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
import Logout from "./Logout"
import PopularMuvi from "./fetchApi/Popular";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopNav = createMaterialTopTabNavigator();

export default function Navigation() {
    return (
    
            <Stack.Navigator initialRouteName="getstarted">
                <Stack.Screen name="first" component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name="getstarted" component={Started} options={{ headerShown: false }} />
                <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Registration} options={{ headerShown: false }} />
                <Stack.Screen name="BottomTabNav" component={BottomTabNav} options={{ headerShown: false }} />
                <Stack.Screen name="action" component={Action} options={{ headerShown: false }} />
                {/* <Stack.Screen name="gallery" component={Gallery} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="popular" component={Popular} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="trending" component={Trending} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        
    );
};

export const BottomTabNav = () => {

    return (
        <Tab.Navigator screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "home") {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === "search") {
                    iconName = focused ? 'magnify' : 'magnify';
                }
                else if (route.name === "list") {
                    iconName = focused ? 'folder' : 'folder-outline';
                }
                else if (route.name === "profile") {
                    iconName = focused ? 'account' : 'account-outline';
                }
                return <Icon name={iconName} type="material-community" size={30} color={color} />;
            },
            tabBarActiveTintColor: '#c2a749',
            tabBarInactiveTintColor: '#dbdddd',
            tabBarShowLabel: false,
            tabBarShowIcon: true,
            tabBarStyle: {
                backgroundColor: '#26282c'
            },
            options: { headerShown: false },
            tabBarOnPress: () => {
                console.log('tabBarOnPress');
            }
        })}
        >
            <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="search" component={Search} options={{ headerShown: false }} />
            <Tab.Screen name="list" component={List} options={{ headerShown: false }} />
            <Tab.Screen name="profilr" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export const DrawerNav = () => {
    return (

        <Drawer.Navigator>
            <Drawer.Screen name="navigation" component={Navigation} options={{ headerShown: false }} />
            <Drawer.Screen name="find more here" component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name="gallery" component={NewRelease} options={{ headerShown: false }} />
            <Drawer.Screen name="popular" component={PopularMuvi} options={{ headerShown: false }} />
            <Drawer.Screen name="profile" component={Profile} options={{ headerShown: false }} />
            <Drawer.Screen name="logout" component={Logout} options={{ headerShown: false }} />
        </Drawer.Navigator>

    );
}
// export const TopNavigation = () => {

//     return (
//         <TopNav.Navigator>
//             <TopNav.Screen name="popular" component={DrawerNav} />
//             <TopNav.Screen name='followers' component={Profile} />
//             <TopNav.Screen name='search' component={Search} />
//         </TopNav.Navigator>

//     )
// }