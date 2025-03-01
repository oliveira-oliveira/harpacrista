/* eslint-disable react/react-in-jsx-scope */

import { createStackNavigator } from '@react-navigation/stack';

import HarpaCrista from '../src/views/HarpaCrista';
import HinoSelecionado from '../src/views/HinoSelecionado';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/

const Stack = createStackNavigator();

export default function StackHinosRoutes(props:any) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="Harpa Cristã"
                component={HarpaCrista}
                options={{
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
                options={{ title: 'Harpa Cristã' }}
            />
        </Stack.Navigator>
    );
}

// const styles = StyleSheet.create({
//     tabBar: {
//         width: 240,
//     },
//     itens: {
//         marginLeft: 50000,
//         justifyContent: 'center',
//         backgroundColor: 'green',
//         color: 'green'
//     },
// });
