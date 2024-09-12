import {Stack, Tabs} from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack initialRouteName={"index"}>
            <Stack.Screen name="index"  options={{headerShown: false}} />
            <Stack.Screen name="signin" options={{headerShown: false}} />
            <Stack.Screen name="forget-password" options={{headerShown: false}} />
        </Stack>
    );
}
