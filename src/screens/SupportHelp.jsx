import { Text, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'

import ImgBackground from '../components/ImgBackground/Background'

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
                    <Text>Estimado usuario: </Text>
                    <Text>Por cualquier duda o consulta que exista, tanto de funcionalidad como de algun inconveniente o imprevisto, envíenos un correo electrónico a petlinkHelp@petlink.com y responderemos a sus consultas tan rapido como sea posible</Text>
                    <Text>Para reportar un problema comunicate al numero 1123952295 o escribino a petlink@petlink.com </Text>
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

    buttonContainer: {
        backgroundColor: "red",
        marginTop: 25,
    }


});