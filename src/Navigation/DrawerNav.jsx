import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator
            drawerContent={DrawerContent}
            screenOptions={{
                headerShown: false
            }}>
            <Drawer.Screen name="Tabs" component={BottomTabs} />
        </Drawer.Navigator>
    )
}