import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Play from './Play';

export default (props) => {
    const [isPressed, setIsPressed] = useState('');
    const [audioStop, setAudioStop] = useState(false);
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                {props.voltar && (
                    <Icon
                        name="arrow-left"
                        color="black"
                        size={30}
                        onPress={() => {
                            navigation.navigate('HinoSelecionado', {
                                hinoSelecionado: props.voltar.hino,
                            });
                            setAudioStop(true);
                        }}
                        onPressIn={() => setIsPressed('pressIn')}
                        onPressOut={() => setIsPressed('')}
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
                        size={30}
                        onPress={() => {
                            navigation.navigate('HinoSelecionado', {
                                hinoSelecionado: props.avancar.hino,
                            });
                            setAudioStop(true);
                        }}
                        onPressIn={() => setIsPressed('pressInRight')}
                        onPressOut={() => setIsPressed('')}
                        style={StyleSheet.flatten([
                            styles.iconAvancar,
                            isPressed === 'pressInRight' ? styles.pressed : styles.avancar,
                        ])}
                    />
                )}
                {/* <Button
                    title="Voltar"
                    onPress={() => {
                        if (props.voltar) {
                            navigation.navigate('HinoSelecionado', {
                                hinoSelecionado: props.voltar.hino,
                            });
                        }
                    }}
                    disabled={!props.voltar || props.voltar.index === 0}
                /> */}
                {/* {
                    props.avancar ?
                    <Button
                        title='Avançar'
                        onPress={() => {
                            navigation.navigate('HinoSelecionado', {
                                hinoSelecionado: props.avancar.hino,
                            });
                        }}
                    /> :
                    false
                } */}
                <View style={{ flex: 1 }}>
                    {props.children}
                    {console.log('props.number: ', props.avancar.hino.number - 1)}
                        <Play numeroHino={props.avancar.hino.number - 1} stop={audioStop} />
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
        left: 10, // Mantém o ícone na lateral esquerda
        top: '50%', // Move para o meio da tela
        transform: [{ translateY: -12 }], // Ajusta o alinhamento exato
        backgroundColor: 'lightgray',
        borderRadius: 50,
        padding: 5,
    },
    iconAvancar: {
        position: 'absolute',
        right: 10, // Mantém o ícone na lateral direita
        top: '50%', // Move para o meio da tela
        transform: [{ translateY: -12 }], // Ajusta o alinhamento exato
        backgroundColor: 'lightgray',
        borderRadius: 50,
        padding: 5,
    },
    pressed: {
        backgroundColor: 'gray',
        color: 'white',
    },
});
