import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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




const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="first">

                <Stack.Screen name="first" component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name="getstarted" component={Started} options={{ headerShown: false }} />
                <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Registration} options={{ headerShown: false }}/>
                <Stack.Screen name="home" component={Home} options={{ headerShown: false}}/>
                <Stack.Screen name="search" component={Search} options={{ headerShown: false }}/>
                <Stack.Screen name="searcherror" component={SearchError} options={{ headerShown: false }}/>
                <Stack.Screen name="list" component={List} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};


