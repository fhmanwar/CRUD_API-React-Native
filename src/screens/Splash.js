import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Background, Logo } from '../assets/Image'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('BottomNav');
        }, 3000)
    }, [navigation]);

    return ( 
        <ImageBackground source={Background} style={styles.BackgroundCSS}>
            <Image source={Logo} style={styles.LogoCSS} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    BackgroundCSS: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LogoCSS: {
        width: 150,
        height: 130
    }
})