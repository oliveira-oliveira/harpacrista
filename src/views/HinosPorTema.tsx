
import React, { FlatList, StyleSheet, Text, View } from 'react-native';
import temas from '../Temas/Temas.json';
import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';


export default function HinosPorTema({ navigation }:any ) {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const getTemasItem = ({ item }: any) => {
        return (
            <Text
                style={style.hinos}
                    onPress={() => {
                        navigation.navigate('TemaSelecionado', {tema: item});
                    }
                }
                >
                <Icon name="chevron-right" size={15} /> {item.title}
            </Text>
        );
    };

    return (
        <View>
            {
                loading ? (
                    <Loading />
                ) :
                (
                    <FlatList
                        data={temas}
                        renderItem={getTemasItem}
                        keyExtractor={(x) => x._id.$oid}
                    />
                )
            }
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
