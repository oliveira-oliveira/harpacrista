
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Biblioteca de ícones

export default function ErrorScreen() {
    return (
        <View style={styles.container}>
            <Icon name="x-circle" size={50} color="red" />
            <Text style={styles.errorText}>Ocorreu um erro!</Text>
            <TouchableOpacity style={styles.retryButton}>
                <Text style={styles.retryText}>Tentar novamente</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    errorText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        marginVertical: 10,
    },
    retryButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    retryText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
