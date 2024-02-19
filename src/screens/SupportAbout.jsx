import { Text, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'

import ImgBackground from '../components/ImageBackground'

import { StyleSheet } from "react-native";
import { fontSizes } from "../theme/fonts";
import { colors } from "../theme/colors";

const About = () => {

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Petlink
                </Text>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.containerList}>
                    <Text style={styles.text}>Petlink fue desarrollado por un grupo de estudiantes de la carrera de Analista de Sistemas.</Text>
                    <Text style={styles.text}>Nuestro principal objetivo es dar solucion a la problematica que se genera cuando queremos
                        pasear a nuestra mascota y se complejiza la tarea de conseguir a un paseador de confianza.
                        Hemos desarrollado esta aplicacion con el objetivo de poder unir a mas paseadores con usuarios, manteniendo
                        la seguridad, comunicacion e inclusión.
                        Lo mas importante para nosotros es que nuestros usuarios se sientan protegidos como tambien sus mascotas. Por eso,
                        hemos implementado la funcionalidad de ubicacion en tiempo real, para que sepas donde está tu mascota en todo momento.
                        Además, tanto los usuarios como los paseadores podran conocerse a través de sus perfiles y se podrá evaluar
                        la comunicación entre ellos al finalizar los paseos.

                    </Text>
                    <Text style={styles.text}>Esperamos que tu paso por Petlink sea muy placentero.</Text>
                </View>
            </View>

        </SafeAreaView>
    )

}

export default About;

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center'
    },

    title: {
        color: colors.brand.primary,
        fontWeight: "bold",
        fontSize: fontSizes.title,
        margin: 40,
    },

    textContainer: {
        alignItems: 'center',

    },

    containerList: {
        backgroundColor: colors.brand.white,
        height: '80%',
        width: '80%',
        borderRadius: 20,
    },

    text: {
        margin: "3%",
        textAlign: 'auto',
        fontSize: 16,
    },  

    buttonContainer: {
        backgroundColor: "red",
        marginTop: 25,
    }


});