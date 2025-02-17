
import React, { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Loading() {

    return (
        <View style={style.container}>
            <Text style={style.loadingText}>
                Carregando...{'\n'}<ActivityIndicator size="large" color="#000" />
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        fontWeight: 'black',
        fontSize: 25,
        textAlign: 'center',
    },
    loadingIcon: {
        textAlign: 'center',
    },
});
