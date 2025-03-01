
import React, { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Loading() {

    return (
        <View style={styles.container}>
            <Text style={styles.loadingText}>
                Carregando...
                {'\n'}
                {/* <Image
                    source={require("../../src/imgs/ic_launcher-web.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
                {'\n'} */}
                <ActivityIndicator size="large" color="#000" />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    loadingText: {
        fontWeight: 'black',
        fontSize: 25,
        textAlign: 'center',
    },
    loadingIcon: {
        textAlign: 'center',
    },
    image: {
        //borderRadius: 50,
    },
});
