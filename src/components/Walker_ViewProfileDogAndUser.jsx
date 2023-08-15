import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react';

import Button from './ButtonRegular';
import ImgBackground from './ImageBackground';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native'
import { fontSizes } from '../theme/fonts';

const Walker_ViewProfileDogAndWalker = ({ item }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ImgBackground />
            <View style={styles.contentContainer}>
                <View style={styles.photoContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.img }}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.scoreText}>Calificacion: {item.score}</Text>
                    <Text style={styles.scoreText}>Paseos completados: {item.finishedWalks}</Text>
                </View>
            </View>





            <View style={styles.contentContainer}>
                <View style={styles.photoContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.petImg }}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>Nombre</Text>
                    <Text style={styles.scoreText}>Edad: </Text>
                    <Text style={styles.scoreText}>Raza: </Text>
                </View>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.label}>Peso:  kg</Text>
                <Text style={styles.label}>Altura:  cm</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => navigation.navigate("PagoPaseo")}
                    text={"Solicitar Paseo"}>
                        // Enviar request al paseador para aceptar el paseo
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default Walker_ViewProfileDogAndWalker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        height: "50%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    photoContainer: {
        height: '100%',
        width: '40%',
        marginHorizontal: '5%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    textContainer: {
        flex: 1,
        height: '100%',
        justifyContent: "center",
    },
    nameText: {
        fontSize: fontSizes.text,
        marginBottom: "2%",
        color: "black"
    },
    scoreText: {
        fontSize: fontSizes.subtitle,
        marginBottom: "2%",
    },
    detailsContainer: {
        height: '50%',
        width: '90%',
        backgroundColor: colors.brand.white,
        alignSelf: "center",
        borderRadius: 15,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    label: {
        fontSize: fontSizes.text,
        marginVertical: 5,
    },
    buttonContainer: {
        marginTop: 25,
        alignItems: "center"
    }
});