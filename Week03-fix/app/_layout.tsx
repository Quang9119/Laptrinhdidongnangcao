import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useRouter } from 'expo-router';
import SignInScreen from './(tabs)/signin'; // Adjust the path as needed
import HomeScreen from './(authed)/home';
import NotFoundScreen from "@/app/+not-found";
import Home from "./(authed)/home"; // Adjust the path as needed

const Stack = createStackNavigator();

function AppNavigator({ isAuthenticated }: { isAuthenticated: boolean }) {
  const router = useRouter();

  useEffect(() => {
    console.log("Is Authenticated:", isAuthenticated);
  }, [isAuthenticated]);

  return (
      <Stack.Navigator>
        {isAuthenticated ? (
            <>
              <Stack.Screen
                  name="(tabs)"
                  component={Home}
                  options={{ headerShown: false }}
              />
              {console.log("Rendering HomeScreen")}
            </>
        ) : (
            <>
              <Stack.Screen
                  name="(authed)"
                  component={SignInScreen}
                  options={{ headerShown: false }}
              />
              {console.log("Rendering SignInScreen")}
            </>
        )}
        <Stack.Screen
            name="+not-found"
            component={NotFoundScreen} // Ensure this is defined or imported
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}

export default AppNavigator;
