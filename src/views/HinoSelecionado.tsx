import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; //https://feathericons.com/
import Loading from '../components/Loading';

export default function HinoSelecionado ({ route }: any) {
    const[zoom, setZoom] = useState(14);
    const [isPressed, setIsPressed] = useState('');
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const { hino } = route.params;
    const chorus = hino.verses.some((v:any) => v.chorus);

    return (
        <View style={style.container}>
        {
            loading ? (
                <Loading />
            ) :
            (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={style.title}>{hino.number} - {hino.title}</Text>
                        {
                            hino.verses.map((verso: any) => (
                                <Text
                                    style={verso.chorus ? style.chorus : style.verse}
                                    key={verso.sequence}
                                >
                                    <Text>
                                        {verso.chorus ? (
                                            <Text style={[style.sequence, { fontSize: zoom }]}>
                                            {'\n'}{verso.lyrics}
                                            </Text>
                                        ) : (
                                            <>
                                            {verso.sequence > 2 ? (
                                                <Text style={style.sequence}>
                                                    {verso.sequence - (chorus ? 1 : 0)}
                                                </Text>
                                            ) : (
                                                <Text style={style.sequence}>{verso.sequence}</Text>
                                            )}
                                            {'\n'}
                                                <Text style={{ fontSize: zoom }}>{verso.lyrics}</Text>
                                            </>
                                        )}
                                        </Text>
                                </Text>
                            ))
                        }
                    <Text style={style.autor}>Autor: {hino.author}</Text>
                    {/* <View>
                        <Text
                            onPress={() => Linking.openURL('https://www.youtube.com')}
                        >
                            title='Ouvir'

                        </Text>
                    </View> */}
                </ScrollView>
            )
        }
            <View style={style.zoomBar}>
                <Icon
                    name="zoom-out"
                    size={40}
                    color="black"
                    onPress={() => setZoom((prevZoom) => Math.max(prevZoom - 1, 10))}
                    onPressIn={() => setIsPressed('zoom-out')}
                    onPressOut={() => setIsPressed('')}
                    style={StyleSheet.flatten([
                        style.zoomOut,
                        isPressed === 'zoom-out' && style.pressedButton,
                    ])}
                />
                <Icon
                    name="zoom-in"
                    size={40}
                    color="black"
                    onPress={() => setZoom((prevZoom) => Math.min(prevZoom + 1, 30))}
                    onPressIn={() => setIsPressed('zoom-in')}
                    onPressOut={() => setIsPressed('')}
                    style={StyleSheet.flatten([
                        style.zoomIn,
                        isPressed === 'zoom-in' && style.pressedButton,
                    ])}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    verse: {
        margin: 10,
        fontSize: 15,
    },
    chorus: {
        fontWeight: 'bold',
        margin: 10,
        fontSize: 15,
    },
    autor: {
        textAlign: 'right',
        marginRight: 15,
        marginBottom: 15,
        fontSize: 15,
    },
    sequence: {
        textAlign: 'center',
    },
    zoomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgray',

    },
    zoomOut: {
        backgroundColor: 'lightgray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        textAlign: 'center',
    },
    zoomIn: {
        backgroundColor: 'lightgray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        textAlign: 'center',
    },
    pressedButton: {
        backgroundColor: 'gray',
        color: 'white',
    },
});
