import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import Home from "./Home";
import Search from "./Search";
import Profile from "./Profile";
import Started from "./getStarted";
import Welcome from "./welcome";
import Login from "./Login";
import Registration from "./Registration";
import List from "./myList";
import Action from "./Action";
import Logout from './Logout'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopNav = createMaterialTopTabNavigator();

export function Navigation() {
    return (
    
            <Stack.Navigator initialRouteName="getstarted">
               
                <Stack.Screen name="getstarted" component={Started} options={{ headerShown: false }} />
                <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Registration} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={BottomTabNav} options={{ headerShown: false }} />
                <Stack.Screen name="search" component={BottomTabNav} options={{ headerShown: false }} />
                <Stack.Screen name="list" component={BottomTabNav} options={{ headerShown: false }} />
                <Stack.Screen name="profile" component={BottomTabNav} options={{ headerShown: false }} />
                <Stack.Screen name="action" component={Action} options={{ headerShown: false }} />

            </Stack.Navigator>
        
    );
};

export  const BottomTabNav = () => {

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
            <Tab.Screen name="home" component={TopNavigation} options={{ headerShown: false }} />   
            <Tab.Screen name="search" component={Search} options={{ headerShown: false }} />
            <Tab.Screen name="list" component={List} options={{ headerShown: false }} />
            <Tab.Screen name="profile" component={Profile} options={{ headerShown: false }} />

        </Tab.Navigator>
    )
}
export const DrawerNav = () => {
    return (

        <Drawer.Navigator>
            <Drawer.Screen name="navigation" component={Navigation} options={{ headerShown: false }} />
            <Drawer.Screen name="find more here" component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name="gallery" component={Search} options={{ headerShown: false }} />
            <Drawer.Screen name="popular" component={List} options={{ headerShown: false }} />
            <Drawer.Screen name="profile" component={Profile} options={{ headerShown: false }} />
            <Drawer.Screen name="logout" component={Logout} options={{ headerShown: false }} />
        </Drawer.Navigator>

    );
}
export const TopNavigation = () => {

    return (
        <TopNav.Navigator>
            
            <TopNav.Screen name='Popular movies' component={Home} />
            <TopNav.Screen name='Trending' component={Search} />
            <TopNav.Screen name='Rated' component={List} />
            <TopNav.Screen name='Marvel' component={Profile} />

        </TopNav.Navigator>

    )
}