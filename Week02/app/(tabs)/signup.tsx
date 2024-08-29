import {Text, View, StatusBar, TextInput, Button, Alert} from 'react-native';
import {useState} from "react";
import {tls} from "node-forge";
import { API_URL } from '@env';
export default function HomeScreen() {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>('ROLE_RESTAURANT_OWNER');

    const handleSignup = async (): Promise<void> => {
        try {
            const response = await fetch('http://172.16.20.233:5454/auth/signup',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    password,
                    role,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                Alert.alert('Đăng ký thành công!', 'Tài khoản của bạn đã được tạo.');
            } else {
                const error = await response.json();
                Alert.alert('Đăng ký thất bại', 'Email đã có người đăng ký');

            }
        } catch (error) {
            // Ghi lỗi vào console
            console.error('Lỗi:', error);

            // Hiển thị lỗi trong Alert
            Alert.alert('Đăng ký đã thất bại', 'Email đã có người đăng ký');
        }
    };

    return (
        <View className="flex-1 p-4 bg-white justify-center">
            <Text className="text-2xl mb-5 text-center">Đăng ký</Text>

            <TextInput
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                className="h-10 border border-gray-300 mb-3 p-2"
            />

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

            <Button title="Đăng ký" onPress={handleSignup} />

            <StatusBar />
        </View>
    );
}

