import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { Switch } from "@react-native-material/core";
import Entypo from 'react-native-vector-icons/Entypo';
import { COLOR } from '../Constant/Variable';

export default function DrawerContent() {
    const [checked, setChecked] = useState(true);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <View style={styles.flexMenu}>
                    <Image style={styles.userIcon} source={require("../assets/splash.jpg")} />
                    <Text style={{ fontSize: 20 }}>User Name</Text>
                </View>
            </View>
            <View style={styles.flexMenu}>
                <Entypo color={COLOR.primary} size={20} name="light-up" />
                <Text style={styles.menuText}>Dark/Light</Text>
                <Switch value={checked} onValueChange={() => setChecked(!checked)} />
            </View>
            <View style={styles.flexMenu}>
                <Icon color={COLOR.primary} size={20} name="lock" />
                <Text style={styles.menuText}>Password</Text>
            </View>
            <View style={styles.flexMenu}>
                <Icon color={COLOR.primary} size={20} name="shopping-bag" />
                <Text style={styles.menuText}>Order</Text>
            </View>
            <View style={styles.flexMenu}>
                <Icon color={COLOR.primary} size={20} name="shopping-cart" />
                <Text style={styles.menuText}>My carts</Text>
            </View>
            <View style={styles.flexMenu}>
                <Icon color={COLOR.primary} size={20} name="heart" />
                <Text style={styles.menuText}>My Wishlist</Text>
            </View>
            <View style={styles.flexMenu}>
                <Icon color={COLOR.primary} size={20} name="settings" />
                <Text style={styles.menuText}>Settings</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    headerView: {
        marginVertical: 30
    },
    flexMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 18
    },
    menuText: {
        color: COLOR.primary,
        fontSize: 16,
        marginLeft: 5
    },
    userIcon: {
        width: 40,
        height: 40,
    }
})