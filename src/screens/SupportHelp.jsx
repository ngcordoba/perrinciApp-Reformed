import { Text, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'

import ImgBackground from '../components/ImageBackground'

import { StyleSheet } from "react-native";
import { fontSizes } from "../theme/fonts";
import { colors } from "../theme/colors";

const Help = () => {


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Estamos para ayudarte
                </Text>
            </View>

            <View style={styles.walkerListContainer}>
                <View style={styles.containerList}>
                    <Text style={styles.text}>Estimado usuario, </Text>
                    <Text style={styles.text}>Por cualquier duda o consulta que exista con respecto a funcionalidades y acerca de Perrinci, te dejamos nuestras direcciones de contacto y responderemos a sus consultas tan rapido como sea posible: </Text>
                    <Text style={styles.text}> ✉️ info@perrinci.com.ar</Text>
                    <Text style={styles.text}>Para reportar un problema: </Text>
                    <Text style={styles.text}> ✉️ support@perrinci.com.ar</Text>
                    <Text style={styles.text}> ☎️ 0800-912-2018</Text>
                </View>
            </View>

        </SafeAreaView>
    )

}

export default Help;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    textHeader: {
        color: colors.brand.primary,
        fontSize: fontSizes.title,
        margin: 40,
    },

    walkerListContainer: {
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