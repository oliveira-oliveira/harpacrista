/* eslint-disable react/react-in-jsx-scope */

import { createStackNavigator } from '@react-navigation/stack';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/
import TemaSelecionado from '../src/views/TemaSelecionado';
import HinosPorTema from '../src/views/HinosPorTema';
import HinoSelecionado from '../src/views/HinoSelecionado';

const Stack = createStackNavigator();

export default function StackTesteRoutes(props:any) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HinoPorTema"
                component={HinosPorTema}
                options={{
                    title: 'Hinos por tema',
                    headerLeft: () => (
                        <Text onPress={() => props.navigation.openDrawer()} style={{ marginLeft: 15, marginRight: 10 }}>
                            <Icon name="menu" size={25} color="black" />
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="TemaSelecionado"
                component={TemaSelecionado}
                options={{ title: 'Harpa Cristã', headerShown: true }}
            />
            <Stack.Screen
                name="HinoSelecionado"
                component={HinoSelecionado}
                options={{ title: 'Harpa Cristã', headerShown: true }}
            />
        </Stack.Navigator>
    );
}
