import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from "./firstScreen";
import Started from "./getStarted";
import Welcome from "./welcome";
import Signin from "./Signin";
import Login from "./Login";
import Registration from "./Registration";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="register">

                <Stack.Screen name="first" component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name="getstarted" component={Started} options={{ headerShown: false }} />
                <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Registration} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Navigation;
