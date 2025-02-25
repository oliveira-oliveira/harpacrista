import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default (props) => {
    const [isPressed, setIsPressed] = useState('');
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                {props.voltar && (
                    <Icon
                        name="arrow-left"
                        color="black"
                        size={34}
                        onPress={() => {
                            navigation.navigate('HinoSelecionado', {
                                hinoSelecionado: props.voltar.hino,
                                pararHino: true,
                            });
                        }}
                        onPressIn={() => {
                            setIsPressed('pressInLeft');
                        }}
                        onPressOut={() => {
                            setIsPressed('');
                        }}
                        style={StyleSheet.flatten([
                            styles.iconVoltar,
                            isPressed === 'pressInLeft' ? styles.pressed : styles.voltar,
                        ])}
                    />
                )}

                {props.avancar && (
                    <Icon
                        name="arrow-right"
                        color="black"
                        size={34}
                        onPress={() => {
                            navigation.navigate('HinoSelecionado', {
                                hinoSelecionado: props.avancar.hino,
                                pararHino: true,
                            });
                        }}
                        onPressIn={() => {
                            setIsPressed('pressInRight');
                        }}
                        onPressOut={() => {
                            setIsPressed('');
                        }}
                        style={StyleSheet.flatten([
                            styles.iconAvancar,
                            isPressed === 'pressInRight' ? styles.pressed : styles.avancar,
                        ])}
                    />
                )}
                <View>
                    {props.children}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconVoltar: {
        position: 'absolute',
        left: 10,
        top: 340,
        backgroundColor: 'lightgray',
        borderRadius: 50,
        padding: 5,
    },
    iconAvancar: {
        position: 'absolute',
        right: 10,
        top: 340,
        backgroundColor: 'lightgray',
        borderRadius: 50,
        padding: 5,
    },
    pressed: {
        backgroundColor: 'gray',
        color: 'white',
    },
});
