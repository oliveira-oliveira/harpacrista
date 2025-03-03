import React, { useState, useEffect } from 'react';
import { StyleSheet, View  } from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Feather';
//import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function Play({ numeroHino, stopHino}: { numeroHino: number; stopHino: boolean }) {
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

    const startNewAudio = async (url: string) => {
        const newSound = new Sound(url, undefined, (error) => {
            if (error) {
                console.log('Erro ao carregar o som:', error);
                Alert.alert('Erro ao carregar o som. Verifique sua conexão com a internet:', error);
                return;
            }
            setSound(newSound);
        });

        await new Promise((resolve, reject) => {
            newSound.play((success) => {
                if (success) {
                    setIsPlaying(true);
                    resolve(null);
                } else {
                    console.log('Erro ao reproduzir o áudio');
                    reject('Erro ao reproduzir o áudio');
                }
            });
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
        if (stopHino && sound) {
            console.log('Parando áudio ao trocar de hino...');
            sound.stop(() => {
                sound.release();
                setSound(null);
                setIsPlaying(false);
                console.log('Áudio parado e liberado.');
            });
        }
    }, [sound, stopHino]);

    useEffect(() => {
        return () => {
            if (sound) {
                console.log('Parando áudio ao desmontar a tela...');
                sound.stop(() => {
                    sound.release();
                    setSound(null);
                    setIsPlaying(false);
                    console.log('Áudio parado ao desmontar.');
                });
            }
        };
    }, [numeroHino, sound]);

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
        <View style={[style.container, isPressed ? style.pressed : style.container ]}>
            <Icon
                name={isPlaying ? 'pause-circle' : 'play-circle'}
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
        flexDirection: 'row',
        margin: 5,
        borderRadius: 50,
    },
    icon: {
        backgroundColor: 'lightgray',
        padding: 7,
        borderRadius: 50,
    },
    pressed: {
        backgroundColor: 'gray',
        color: 'white',
    },
});
