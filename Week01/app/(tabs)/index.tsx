import React, { useEffect } from "react";
import {Image, StatusBar, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, View, SafeAreaView, Text, Alert } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar/>
      </View>
  );
}

