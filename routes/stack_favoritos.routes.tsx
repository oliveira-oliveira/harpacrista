/* eslint-disable react/react-in-jsx-scope */

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/
import { StyleSheet, Text } from 'react-native';
import HinoSelecionado from '../src/views/HinoSelecionado';
import HinosFavoritos from '../src/views/HinosFavoritos';

const Stack = createStackNavigator();

export default function StackFavoritosRoutes(props:any) {

    return (
        <Stack.Navigator screenOptions={{ headerStyle: styles.header }}>
            <Stack.Screen
                name="Favoritos"
                component={HinosFavoritos}
                options={{
                    headerShown: true,
                    headerLeft: () => (
                        <Text onPress={() => props.navigation.openDrawer()} style={{ marginLeft: 15, marginRight: 10 }}>
                            <Icon name="menu" size={25} color="black" />
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="HinoSelecionado"
                component={HinoSelecionado}
                options={{ title: 'Harpa Cristã', headerShown: true }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        color: 'green',
        backgroundColor: '#fff',
    },
});
