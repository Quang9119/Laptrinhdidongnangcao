import React from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'; // useFocusEffect

export default function SignOut() {
    const router = useRouter();

    useFocusEffect(
        React.useCallback(() => {
            Alert.alert(
                "Xác nhận Đăng Xuất",
                "Bạn có chắc muốn đăng xuất?",
                [
                    {
                        text: "Hủy",
                        onPress: () => router.back(), // Quay lại nếu người dùng hủy
                        style: "cancel"
                    },
                    {
                        text: "Có", onPress: () => {
                            // Logic đăng xuất (xóa token, dữ liệu người dùng, v.v.)
                            Alert.alert('Đăng xuất thành công!');
                            // Điều hướng về màn hình SignIn sau khi đăng xuất
                            router.replace('../signin');
                        }
                    }
                ],
                { cancelable: true }
            );
        }, []) // Empty dependency array to ensure it only runs when screen is focused
    );

    return null; // Không cần render bất kỳ nội dung gì
}
