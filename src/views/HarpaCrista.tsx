
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import hinos from '../Hinos/hinos.json';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
//import Icon from 'react-native-vector-icons/fontawesome6'; //https://feathericons.com/
import Loading from '../components/Loading';
import { Input } from 'react-native-elements';

export default function HarpaCrista(props: any) {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const [hinosFiltrados, setHinosFiltrados] = useState(hinos);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        const texto = searchText.toLowerCase();
        const filtrados = hinos.filter((hino) =>
            hino.title.toLowerCase().includes(texto) ||
            hino.number.toString().includes(searchText) ||
            hino.verses.some((verso: any) => verso.lyrics.toLowerCase().includes(texto))
        );
        setHinosFiltrados(filtrados);
    }, [searchText]);

    const getHinosItem = ({ item }: any) => {
        return (
            <Text
                style={style.hinos}
                onPress={() => {
                    props.navigation.navigate('HinoSelecionado', { hinoSelecionado: item });
                }}
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
            {loading ? (
                <Loading />
            ) : (
                <>
                <View style={style.pesquisa}>
                    {/* <TextInput */}
                    <Input
                        placeholder="Procure o hino pelo nome ou número"
                        placeholderTextColor="black"
                        value={searchText}
                        onChangeText={setSearchText}
                        leftIcon={<Icon name="search" size={20} />}
                    />
                </View>
                <FlatList
                    keyExtractor={(hino) => hino._id.$oid}
                    data={hinosFiltrados}
                    renderItem={getHinosItem}
                />
                </>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        flex: 1,
    },
    hinos: {
        height: 50,
        textAlignVertical: 'center',
        paddingLeft: 15,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        fontSize: 15,
    },
    pesquisa: {
        height: 50,
        borderWidth: 1,
        borderColor: 'transparent',
        fontSize: 16,
    },
});
