import { View, Text, StyleSheet, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';

import PerrinciButton from './ButtonRegular';
import ImgBackground from './ImageBackground';
import { useNavigation } from '@react-navigation/native';
import { fontSizes } from '../theme/fonts';

const Walker_ViewProfileDogAndWalker = ({ item }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ImgBackground />
            <View style={styles.contentContainer}>
                <View style={styles.photoContainer}>
                    <Image style={styles.image} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>Name</Text>
                    <Text style={styles.scoreText}>Calificacion: </Text>
                    <Text style={styles.scoreText}>Direccion: </Text>
                </View>
            </View>

            <View style={styles.dogContainerInfo}>
                <View style={styles.photoContainer}>
                    <Image style={styles.image} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>Nombre</Text>
                    <Text style={styles.scoreText}>Edad: </Text>
                    <Text style={styles.scoreText}>Raza: </Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <PerrinciButton
                    id="walkAccepted"
                    onPress={() => navigation.navigate("EmpezarAPasear")}
                    text={"Aceptar paseo"}
                />
                <PerrinciButton
                    id="walkRejected"
                    onPress={() => navigation.navigate("EmpezarAPasear")}
                    text={"Rechazar paseo"}
                />

                <Button
                    onPress={() => navigation.navigate("EmpezarAPasear")}
                    title="Volver al mapa">
                </Button>

            </View>
        </SafeAreaView>
    );
};

export default Walker_ViewProfileDogAndWalker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around', // Espacio uniforme alrededor de elementos
        paddingHorizontal: 20,
        marginBottom: "10%"
    },
    dogContainerInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around', // Espacio uniforme alrededor de elementos
        paddingHorizontal: 20,
    },
    photoContainer: {
        flex: 1,
        marginHorizontal: 10,
        alignItems: 'center', // Centra la imagen horizontalmente
    },
    image: {
        width: '80%',
        aspectRatio: 1,
        backgroundColor: 'black',
        borderRadius: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    nameText: {
        fontSize: fontSizes.text,
        marginBottom: 10,
        color: 'black', // Centra el texto horizontalmente
    },
    scoreText: {
        fontSize: fontSizes.subtitle,
        marginBottom: 10, // Centra el texto horizontalmente
    },
    label: {
        fontSize: fontSizes.text,
        marginVertical: 5,
    },
    buttonContainer: {
        marginTop: "10%" // Espacio uniforme entre botones
    },
});