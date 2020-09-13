import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Route from './config/Route'
import { NavigationContainer } from '@react-navigation/native';

const Main = () => {
    return ( 
        <NavigationContainer >
            <Route />
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})