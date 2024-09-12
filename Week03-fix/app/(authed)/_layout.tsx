import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "@/app/(authed)/home";
import Profile from "@/app/(authed)/profile";
import SignOut from "@/app/(authed)/sign-out";

const Drawer = createDrawerNavigator();

export default function _layout() {
    return (
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="SignOut" component={SignOut} />

        </Drawer.Navigator>
    );
}
