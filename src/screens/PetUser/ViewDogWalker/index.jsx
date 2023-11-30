import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react';

import Button from '../../../components/ButtonRegular';
import ImgBackground from '../../../components/ImageBackground';
import styles from "./style"

import { useNavigation } from '@react-navigation/native'


const ViewDogWalker = ({ route }) => {

    const { walkerInfo } = route.params;
    const navigation = useNavigation();

    /*

    const solicitarPaseo = () => {
        Realiza una solicitud al backend para notificar al paseador
        Esto dependerá de cómo esté configurada tu API en el backend.
        Puedes enviar la información del usuario y detalles del paseo.
        Por ejemplo, puedes usar fetch o axios para hacer la solicitud al servidor.
        
        fetch('URL_DE_TU_API/solicitarPaseo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: 123, // ID del usuario que solicita el paseo.
                userLocation: Mario Bravo 947 // dirección del usuario.
                walkerId: actives.id, // ID del paseador al que se le solicita el paseo.
                walkerLocation: ubicación del paseador.

                 
            }),
        })
        .then((response) => {
            Manejar la respuesta del servidor, si es necesario
        })
        .catch((error) => {
            Manejar errores, si es necesario
        });
    };

    */

    return (
        <SafeAreaView style={styles.container}>
            <ImgBackground />
            <View style={styles.contentContainer}>
                <View style={styles.photoContainer}>

                </View>

            </View>

            <View style={styles.detailsContainer}>

                <Text style={styles.label}>Calificacion: {walkerInfo.name}.</Text>
                <Text style={styles.label}>Paseos completados:{walkerInfo.lastName} .</Text>
                <Text style={styles.label}>Precio por paseo: $.</Text>
                <Text style={styles.label}>Tiempo de paseo: . hs.</Text>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("PagoPaseo")}
                        text={"Solicitar Paseo"}>
                            // Enviar request al paseador para aceptar el paseo
                    </Button>



                </View>



            </View>
        </SafeAreaView>
    );
}

export default ViewDogWalker;


