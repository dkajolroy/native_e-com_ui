import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './../Screen/SplashScreen';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

export default function MainNav() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Drawer" component={DrawerNav} />
        </Stack.Navigator>
    )
}