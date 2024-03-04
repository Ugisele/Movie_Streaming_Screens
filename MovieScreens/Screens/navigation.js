import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome,Feather } from '@expo/vector-icons'

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





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="first">

                <Stack.Screen name="first" component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name="getstarted" component={Started} options={{ headerShown: false }} />
                <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
                {/* <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} /> */}
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Registration} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="search" component={Search} options={{ headerShown: false }} />
                <Stack.Screen name="searcherror" component={SearchError} options={{ headerShown: false }} />
                <Stack.Screen name="list" component={List} options={{ headerShown: false }} />
                <Stack.Screen name="action" component={Action} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export const BottomTabNav = () => {

    return (
        <Tab.Navigation>
            <Tab.Screen
                name="hometab"
                component={Home}
                tabBarIcon={({ color, size }) => (
                    <FontAwesome name="home" size={size} color={color} />
                )}
            />
             <Tab.Screen
                name="searchtab"
                component={Search}
                tabBarIcon={({ color, size }) => (
                    <FontAwesome name="home" size={size} color={color} />
                )}
            />
             <Tab.Screen
                name="actiontab"
                component={Action}
                tabBarIcon={({ color, size }) => (
                    <FontAwesome name="home" size={size} color={color} />
                )}
            />
             <Tab.Screen
                name="listtab"
                component={List}
                tabBarIcon={({ color, size }) => (
                    <Feather name="grid" size={size} color={color} />
                )}
            />


        </Tab.Navigation>


    )
}


