import { StyleSheet, View, Text, TextInput, Button, Alert, StatusBar } from 'react-native';
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';

export default function Signin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const saveJwtToken = async (token: string) => {
        try {
            await SecureStore.setItemAsync('jwt', token);
        } catch (error) {
            console.error('Error saving JWT token', error);
        }
    };

    const handleSignin = async (): Promise<void> => {
        try {
            const response = await fetch('http://172.172.23.252:5454/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const result = await response.json();

                // Save JWT token to SecureStore
                saveJwtToken(result.jwt);

                Alert.alert('Đăng nhập thành công!!!!!!');
                router.push('../(authed)/home');
            } else {
                const error = await response.json();
                Alert.alert('Đăng nhập thất bại', 'Sai tài khoản hoặc mật khẩu');
            }
        } catch (error) {
            console.error('Lỗi:', error);
            Alert.alert('Đăng nhập thất bại', 'Sai tài khoản hoặc mật khẩu');
        }
    };

    return (
        <View className="flex-1 p-4 bg-white justify-center">
            <Text className="text-2xl mb-5 text-center">Đăng nhập</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                className="h-10 border border-gray-300 mb-3 p-2"
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="h-10 border border-gray-300 mb-3 p-2"
            />

            <Button title="Đăng nhập" onPress={handleSignin} />
            <StatusBar />
        </View>
    );
}
