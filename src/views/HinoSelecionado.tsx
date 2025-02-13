import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HinoSelecionado ({ route }: any) {
    const { hino } = route.params;
    const chorus = hino.verses.some((v:any) => v.chorus);

    return (
        <View style={style.container}>
            <Text style={style.title}>{hino.number} - {hino.title}</Text>
            {hino.verses.map((verso: any) => (
                <Text
                    style={verso.chorus ? style.chorus : style.hino}
                    key={verso.sequence}
                >
                    {/* <Text>
                        {
                            verso.chorus
                                ? `\n${verso.lyrics}`
                                : `${verso.sequence > 2 ? verso.sequence - (chorus ? 1 : 0) : verso.sequence}\n${verso.lyrics}`
                        }
                    </Text> */}
                    <Text>
                        {verso.chorus ? (
                            <Text style={style.sequence}>
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
                            {verso.lyrics}
                            </>
                        )}
                        </Text>
                </Text>
            ))}
            <Text style={style.autor}>Autor: {hino.author}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        margin: 25,
    },
    title: {
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    hino: {
        margin: 10,
    },
    chorus: {
        fontWeight: 'bold',
        margin: 10,
    },
    autor: {
        textAlign: 'right',
    },
    sequence: {
        textAlign: 'center',
    },
});
