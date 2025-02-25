import React, { useEffect, useState } from 'react';
import hinos from '../Hinos/hinos.json';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';

export default function TemaSelecionado({ route }: any | null) {
    const { tema } = route.params;
    const [loading, setLoading ] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const hinosDosTema = (temas: number[], navigation?: any) => {
        return temas.map((tema:any) => {
            const hinoTema = hinos.find((x: any) => x.number === tema);
            if (hinoTema) {
                return (
                    <Text
                        style={styles.text}
                        key={hinoTema.number}
                        onPress={() => {
                            navigation.navigate('HinoSelecionado', { hinoSelecionado : hinoTema });
                        }}
                    >
                        {hinoTema.number} <Icon name="chevron-right" size={15} />  {hinoTema.title}
                    </Text>
                );
            }
            return null;
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tema: {tema.title}</Text>
            {
                loading ? (
                    <Loading />
                ) : (
                    <ScrollView>
                        <View>
                           {hinosDosTema(tema.data, navigation)}
                        </View>
                    </ScrollView>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        fontSize: 16,
        marginBottom: 5,
    },
    text: {
        margin: 2,
        padding: 15,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        fontSize: 15,
    },
});
