import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home';
import Splash from '../screens/Splash';
import About from '../screens/About';
import Tes from '../screens/Tes';
import BottomNav from '../components/BottomNav';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavbar = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
           <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
           <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
           <Tab.Screen name="Profile" component={Tes} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const Route = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
           <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
           <Stack.Screen name="BottomNav" component={BottomNavbar} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Route

const styles = StyleSheet.create({})
