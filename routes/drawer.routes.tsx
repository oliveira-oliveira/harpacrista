/* eslint-disable react/react-in-jsx-scope */

import { createDrawerNavigator } from '@react-navigation/drawer';
import StackHinosRoutes from './stack_hinos.routes';
import StackTemasRoutes from './stack_temas.routes';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import StackFavoritosRoutes from './stack_favoritos.routes';

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
                component={StackHinosRoutes}
                options={{
                    //headerShown: false,
                    drawerIcon: ({ color, size }) => (
                        <Icon name="book-open" color={color} size={size} />),
                }}
            />
            <Drawer.Screen
                name="Temas"
                component={StackTemasRoutes}
                options={{
                    headerShown: false,
                    drawerIcon: ({ color, size }) => (
                        <Icon name="list" color={color} size={size} />), }}
                />
            <Drawer.Screen
                name="Favoritos"
                component={StackFavoritosRoutes}
                options={{
                    headerTitle: 'Favoritos',
                    drawerIcon: ({ color, size }) => (
                        <Icon name="star" color={color} size={size} />),
                }}
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
