import {useState} from "react";
import {Alert, StatusBar, Text, TextInput, View} from "react-native";
import {Link} from "expo-router";
// @ts-ignore
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";
import Home from "@/app/authed/home";
import Profile from "@/app/authed/profile";
const Drawer = createDrawerNavigator();
export default function _layout() {


    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="_layout">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}