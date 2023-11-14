import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react';

import Button from './ButtonRegular';
import ImgBackground from './ImageBackground';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native'
import { fontSizes } from '../theme/fonts';

const ViewWalkerProfile = ({ route }) => {

    // const actives = useSelector(state => state.walkers.selected)
    const navigation = useNavigation();
    const actives = route.params.walkerInfo;

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
                    <Image
                        style={styles.image}
                        source={{ uri: actives.img }}
                    />
                </View>

            </View>

            <View style={styles.detailsContainer}>

                <Text style={styles.label}>Calificacion: {actives.score}</Text>
                <Text style={styles.label}>Paseos completados: {actives.finishedWalks}</Text>
                <Text style={styles.label}>Precio por paseo: ${actives.price}</Text>
                <Text style={styles.label}>Tiempo de paseo: {actives.durationWalk} hs.</Text>

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

export default ViewWalkerProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        height: "30%",
        alignItems: "center"
    },

    photoContainer: {
        height: '70%',
        width: '40%',
        margin: '10%',
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    detailsContainer: {
        height: '60%',
        width: '90%',
        backgroundColor: colors.brand.white,
        alignSelf: "center",
        borderRadius: 15
    },

    label: {
        maxWidth: "90%",
        height: "12%",
        fontSize: fontSizes.text,
        marginVertical: 5,
        margin: "10%",
        padding: "5%",
    },

    containerList: {
        backgroundColor: colors.brand.white,
        height: '75%',
        width: '90%',
        borderRadius: 20,
        alignSelf: "center",
    },

    buttonContainer: {
        marginTop: 25,
        alignItems: "center"
    }
});