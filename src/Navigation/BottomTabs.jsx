import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './../Screen/HomeScreen';
import CartScreen from './../Screen/CartScreen';

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    )
}