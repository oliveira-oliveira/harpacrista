/* eslint-disable react/react-in-jsx-scope */

import { createDrawerNavigator } from '@react-navigation/drawer';

import HarpaCrista from '../src/views/HarpaCrista';
import HinoSelecionado from '../src/views/HinoSelecionado';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Harpa Cristã"
                component={HarpaCrista}
            />
            <Drawer.Screen
                name="HinoSelecionado"
                component={HinoSelecionado}
            />
        </Drawer.Navigator>
    );
};
