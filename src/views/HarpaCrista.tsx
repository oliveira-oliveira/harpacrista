import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import hinos from '../Hinos/hinos.json';
import { useFocusEffect } from '@react-navigation/native';
//import Icon from 'react-native-vector-icons/FontAwesome'; //https://fontawesome.com/v4/icons/
import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/


export default function HarpaCrista(props:any) {
    const [searchText, setSearchText] = useState('');

    const filtrarHinos = (hino: any) => {
        const texto = searchText.toLowerCase();

        return (
            hino.title.toLowerCase().includes(texto) ||
            hino.number.toString().includes(searchText) 
            //|| hino.verses.some((verso: any) => verso.lyrics.toLowerCase().includes(texto))
        );
    };

    const hinosFiltrados = hinos.filter(filtrarHinos);

    const getHinosItem = ({ item }: any) => {
        return (
            <Text
                style={style.hinos}
                onPress={() => props.navigation.navigate('HinoSelecionado', { hino: item })}
                >
                {item.number} <Icon name="chevron-right" size={15} /> {item.title}
            </Text>
        );
    };

    useFocusEffect(
        useCallback(() => {
            setSearchText('');
        }, [])
    );

    return (
        <View style={style.container}>
            <TextInput
                style={style.pesquisa}
                placeholder=" Procure o hino pelo nome ou número"
                placeholderTextColor="black"
                value={searchText}
                onChangeText={setSearchText}
            />
            <FlatList
                keyExtractor={(hino) => hino._id.$oid}
                data={hinosFiltrados}
                renderItem={getHinosItem}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        flex: 1,
    },
    hinos: {
        margin: 2,
        padding: 15,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        fontSize: 15,
    },
    pesquisa: {
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});
