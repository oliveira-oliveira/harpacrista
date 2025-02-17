/* eslint-disable react/react-in-jsx-scope */

import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './stack_hinos.routes';
import StackTesteRoutes from './stack_temas.routes';
//import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} >
            <Drawer.Screen
                name="Harpa Cristã"
                component={StackRoutes}
            />
            <Drawer.Screen
                name="Hinos por temas"
                component={StackTesteRoutes}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
}
