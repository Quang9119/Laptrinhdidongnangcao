import { Button, StatusBar, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function ForgetPassword() {
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSendOtp = () => {
        // Thực hiện gửi OTP ở đây (ví dụ: gọi API)
        setIsOtpSent(true);
    };

    return (
        <View className="flex-1 p-4 bg-white justify-center">
            <Text className="text-2xl mb-5 text-center">Xác nhận OTP</Text>

            {!isOtpSent ? (
                <>
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        className="h-10 border border-gray-300 mb-3 p-2"
                    />
                    <Button title="Gửi OTP" onPress={handleSendOtp} />
                </>
            ) : (
                <>
                    <TextInput
                        placeholder="OTP"
                        keyboardType="numeric"  // Thay đổi kiểu bàn phím cho OTP
                        className="h-10 border border-gray-300 mb-3 p-2"
                    />
                    <Button title="Xác nhận" onPress={() => {/* Thực hiện xác nhận OTP */}} />
                </>
            )}

            <StatusBar />
        </View>
    );
}
