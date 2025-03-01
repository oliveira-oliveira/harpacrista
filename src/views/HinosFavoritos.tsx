import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import hinos from '../Hinos/hinos.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState<number[]>([]);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            loadFavoritos();
        }, [])
    );

    const loadFavoritos = async () => {
        const storedFavorites = await AsyncStorage.getItem('@favoritos');
        if (storedFavorites) {
            setFavoritos(JSON.parse(storedFavorites));
        }
    };

    // const clearStorage = async () => {
    //     try {
    //         await AsyncStorage.clear();
    //         console.log('AsyncStorage limpo!');
    //     } catch (error) {
    //         console.error('Erro ao limpar o AsyncStorage:', error);
    //     }
    // };
    // clearStorage();

    const hinosFavoritos = (favs: number[], navigation?: any) => {
        return favs.map((numFav:any) => {
            const hinoFav = hinos.find((x: any) => x.number === numFav);
            if (hinoFav) {
                return (
                    <Text
                        style={styles.hinos}
                        key={hinoFav.number}
                        onPress={() => {
                            navigation.navigate('HinoSelecionado', { hinoSelecionado : hinoFav });
                        }}
                    >
                        {hinoFav.number} <Icon name="chevron-right" size={15} />  {hinoFav.title}
                    </Text>
                );
            }
            return null;
        });
    };

    return (
        <ScrollView>
            <View>
                {
                    favoritos.length > 0 ?
                    hinosFavoritos(favoritos, navigation) :
                    <View>
                        <Text style={styles.mensagem}>
                            Você não favoritou nenhum hino ainda.
                        </Text>
                    </View>
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
    mensagem: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: '70%',
    },
});
