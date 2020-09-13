import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ActiveColor, DisableColor } from '../assets/Color';
import { IconHome, IconHomeActive, IconAbout, IconAboutActive, IconSetting, IconSettingActive } from '../assets/Icon';

const BottomTabItem = ({ isFocused, onPress, onLongPress, label }) => {

    const IconTab = () => {
        if (label === 'Home') return isFocused ? IconHomeActive : IconHome
        if (label === 'About') return isFocused ? IconAboutActive : IconAbout
        if (label === 'Profile') return isFocused ? IconSettingActive : IconSetting

        return IconHome
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={ isFocused ? styles.containerFocus : styles.container } >
            <IconTab />    
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default BottomTabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 5
    },
    containerFocus: {        
        alignItems: 'center',
        padding: 5,
        backgroundColor: DisableColor,
        // flexDirection: 'row',
        borderRadius: 25
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? ActiveColor : DisableColor,
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8
    })
})
