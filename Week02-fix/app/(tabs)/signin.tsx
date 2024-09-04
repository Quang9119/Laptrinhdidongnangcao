import {StyleSheet, Image, Platform, Alert, View, Text, TextInput, Button, StatusBar} from 'react-native';
import {useState} from "react";
import {tls} from "node-forge";
import {Link} from "expo-router";
export default function HomeScreen() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignin = async (): Promise<void> => {
        try {
            const response = await fetch('http://192.168.245.138:5454/auth/signin',{
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
                Alert.alert('Đăng nhập thành công!!!!!!');

            } else {
                const error = await response.json();
                Alert.alert('Đăng nhập thất bại', 'Sai tài khoản hoặc mật khẩu');

            }
        } catch (error) {
            // Ghi lỗi vào console
            console.error('Lỗi:', error);

            // Hiển thị lỗi trong Alert
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

