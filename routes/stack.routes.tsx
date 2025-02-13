/* eslint-disable react/react-in-jsx-scope */

import { createStackNavigator } from '@react-navigation/stack';

import HarpaCrista from '../src/views/HarpaCrista';
import HinoSelecionado from '../src/views/HinoSelecionado';

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Harpa Cristã"
                component={HarpaCrista}
            />
            <Stack.Screen
                name="HinoSelecionado"
                component={HinoSelecionado}
                options={{
                    title: 'Harpa Cristã',
                }}
            />
        </Stack.Navigator>
    );
}
