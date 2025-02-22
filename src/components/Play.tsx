import React, { useState, useEffect } from 'react';
import { StyleSheet, View  } from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Play({ numeroHino}: { numeroHino: number }) {
    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState('');
    const navigation = useNavigation();

    const playAudio = () => {
        const url = `https://harpa.nyc3.digitaloceanspaces.com/${numeroHino
            .toString()
            .padStart(3, '0')}.mp3`;

        console.log('Tocando áudio:', url);

        if (sound) {
            sound.stop(() => {
                sound.release();
                startNewAudio(url);
            });
        } else {
            startNewAudio(url);
        }
    };

    const startNewAudio = (url: string) => {
        const newSound = new Sound(url, undefined, (error) => {
            if (error) {
                console.log('Erro ao carregar o som:', error);
                return;
            }
            setSound(newSound);
            newSound.play((success) => {
                if (!success) {
                    console.log('Erro ao reproduzir o áudio');
                }
            });
            setIsPlaying(true);
        });
    };

    const pauseAudio = () => {
        if (sound) {
            sound.pause();
            setIsPlaying(false);
            console.log('Áudio pausado');
        }
    };

    const toggleAudio = () => {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            if (sound) {
                sound.stop(() => {
                    sound.release();
                    setSound(null);
                    setIsPlaying(false);
                });
                console.log('Áudio parado ao sair da tela');
            }
        });

        return unsubscribe;
    }, [navigation, sound]);

    return (
        <View style={style.container}>
            <Icon
                name={isPlaying ? 'pause' : 'play-circle'}
                size={40}
                color={'black'}
                onPress={toggleAudio}
                onPressIn={() => setIsPressed('pressIn')}
                onPressOut={() => setIsPressed('')}
                style={StyleSheet.flatten([
                    style.icon,
                    isPressed === 'pressIn' ? style.pressed : style.icon,
                ])}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        backgroundColor: 'lightgray',
        borderRadius: 50,
        padding: 5,
        marginBottom: 10,
        textAlign: 'center',
    },
    pressed: {
        backgroundColor: 'gray',
        color: 'white',
    },
});
