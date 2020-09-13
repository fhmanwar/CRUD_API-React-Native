import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tes = () => {
    return (
        <View style={styles.container}>
            <Text>Tes Page</Text>
        </View>
    )
}

export default Tes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
