/* eslint-disable react/react-in-jsx-scope */

import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './stack_hinos.routes';
import StackTesteRoutes from './stack_temas.routes';
import { StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{
                headerShown: false,
                headerStyle: style.itens,
                drawerStyle: style.drawer, // Personalizando o estilo do Drawer
                drawerActiveTintColor: 'white', // Cor do texto/ícone do item ativo
                drawerActiveBackgroundColor: 'gray', // Cor de fundo do item ativo
                drawerInactiveTintColor: 'black', // Cor do texto/ícone do item inativo
                //drawerInactiveBackgroundColor: 'gray', // Cor de fundo do item ativo
            }}
        >
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

const style = StyleSheet.create({
    container: {

    },
    drawer: {
        width: 240,
    },
    itens: {

    },
});
