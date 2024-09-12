import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform, Alert, View, Text, TextInput, Button, StatusBar} from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useState} from "react";
import {Link} from "expo-router";
import { styled } from 'nativewind';

const StyledButton = styled(Button);

export default function TabTwoScreen() {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>('ROLE_RESTAURANT_OWNER');

    const handleSignup = async (): Promise<void> => {
        try {
            const response = await fetch('http://172.172.23.252:5454/auth/signup',{
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
            console.error('Lỗi:', error);
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

            <StyledButton title="Đăng ký" onPress={handleSignup} />

            <Text>Bạn đã có tài khoản ?
            <Link href={"/signin"}>
                Đăng nhập</Link>
            </Text>
            <Text>Bạn quên mật khẩu ?
                <Link href={"/forget-password"}>
                    Xác nhận OTP</Link>
            </Text>
            <StatusBar />
        </View>
    );
}
