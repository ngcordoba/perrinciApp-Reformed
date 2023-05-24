import { Text, SafeAreaView, StatusBar, View } from 'react-native'
import styles from "./styles"
import React from 'react'

import ImgBackground from '../../../components/ImgBackground/Background'
import Button from "../../../components/Button";

const About = () => {


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Petlink
                </Text>
            </View>

            <View style={styles.walkerListContainer}>
                <View style={styles.containerList}>
                    <Text>Petlink fue desarrollado por un grupo de estudiantes de la carrera de Analista de Sistemas.</Text>
                    <Text>Nuestro principal objetivo es dar solucion a la problematica que se genera cuando queremos
                        pasear a nuestra mascota y se complejiza la tarea de conseguir a un paseador de confianza.
                        Hemos desarrollado esta aplicacion con el objetivo de poder unir a mas paseadores con usuarios, manteniendo
                        la seguridad, comunicacion e inclusión.
                        Lo mas importante para nosotros es que nuestro usuarios se sienta protegidos como tambien sus mascotas, por eso,
                        hemos implementado la funcionalidad de ubicacion en tiempo real, para saber en todo momento donde está tu mascota.
                        Además, tanto los usuarios como los paseadores podran conocerse a través de sus perfiles y se podrá evaluar
                        la comunicación entre ellos al finalizar los paseos.

                        Esperemos que tu paso por Petlink muy placentero.
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    )

}

export default About;