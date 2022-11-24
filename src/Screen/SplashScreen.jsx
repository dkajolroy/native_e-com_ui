import { View, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Drawer")
        }, 3500);
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/splash.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff"
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
})