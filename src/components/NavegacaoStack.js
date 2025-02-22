import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default props => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View>
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
                {
                    props.voltar ?
                    <Button
                        title='Voltar'
                        onPress={() => {
                            navigation.navigate('HinoSelecionado', {
                                hinoSelecionado: props.voltar.hino,
                            });
                        }}
                    /> :
                    false
                }
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
                <Button
                    title="Avançar"
                    onPress={() => {
                        if (props.avancar) {
                            navigation.navigate('HinoSelecionado', {
                                hinoSelecionado: props.avancar.hino,
                            });
                        }
                    }}
                    disabled={!props.avancar || props.avancar.index === 0}
                />
            </View>
            <View style={{ flex: 1 }}>
                {props.children}
            </View>
        </View>
    );
};
