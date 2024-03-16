import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, ActivityIndicator, Modal, Alert } from 'react-native';
import Button from '../../../components/ButtonRegular';
import ImgBackground from '../../../components/ImageBackground';
import styles from "./style";
// import { handleIntegrationMP } from '../../../utils/MP_integration';
// import { openBrowserAsync } from "expo-web-browser";
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { colors } from '../../../theme/colors';
import { useUser } from '../../../context/UserContext';


const ViewDogWalker = ({ route }) => {
    const { walkerInfo } = route.params;
    const navigation = useNavigation();
    const [solicitudEnProgreso, setSolicitudEnProgreso] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);
    const { user } = useUser();
    const [selectedPaymentMethod, setselectedPaymentMethod] = useState('')
    const payMethods = ["Efectivo", "Acordar con el paseador"];

    const solicitarPaseo = async () => {
        setSolicitudEnProgreso(true);
        setMostrarModal(true);

        setTimeout(async () => {
            try {
                const data = await handleIntegrationMP(walkerInfo);
                if (!data) {
                    console.log("Ha ocurrido un error");
                    setSolicitudEnProgreso(false);
                    setMostrarModal(false);
                    return;
                }

                solicitudEnProgreso = true; // Aprobada OR Desaprobada
                setSolicitudEnProgreso(false);
                setMostrarModal(false);

                console.log("Valor de solicitudAceptada:", solicitudEnProgreso);

                if (solicitudEnProgreso) {
                    console.log("Se ha aceptado el paseo")
                } else {
                    console.log("Solicitud rechazada por el paseador");
                    Alert.alert("El paseador ha rechazado su solicitud, por favor seleccione otro")
                    navigation.goBack();
                }
            } catch (error) {
                console.error("Ha ocurrido un error:", error);
                setSolicitudEnProgreso(false);
                setMostrarModal(false);
            }
        }, 10000);
    }

    /*

    Solicitud de paseo:
    UserName - UserLastName
    PayMethod
    UserLocation
    DogName
    DogRaza
    WalkerName
    WalkerPrice
    WalkerTiempoDePaseo


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
                user.userName:
                user.userLastName:
                user.dogName:
                userLocation: Mario Bravo 947 // dirección del usuario.
                walkerId: actives.id, // ID del paseador al que se le solicita el paseo.
                walkerLocation: ubicación del paseador.
                walkerName:
                WalkerPrice:
                WalkerTiempoDePaseo:
                selectedPaymentMethod:

                 
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
                        source={{ uri: walkerInfo.img }}
                    />
                </View>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.label}>Calificacion: {walkerInfo.score}</Text>
                <Text style={styles.label}>Paseos completados: {walkerInfo.walksCompleted}</Text>
                <Text style={styles.label}>Tiempo de paseo: {walkerInfo.timeWalk} minutos.</Text>
                <Text style={styles.label}>Precio por paseo: ${walkerInfo.price}</Text>
                
                <View style={{alignSelf: 'center'}}>
                    <SelectDropdown
                        
                        data={payMethods}
                        onSelect={(selectedItem, index) => {
                            setselectedPaymentMethod(selectedItem)
                            console.log(selectedItem)
                        }}
                        defaultButtonText="Seleccioná tu metodo de pago"
                        buttonTextStyle={{ color: 'white', fontSize: 12 }}
                        buttonStyle={{ backgroundColor: colors.brand.primary ,margin: 10, borderRadius: 10, borderColor: 'black', padding: 10, width: "65%", height: 40 }}
                        rowStyle={{ borderBottomWidth: 1, padding: 10 }}
                    />
                    
                </View>

                
                

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={solicitarPaseo}
                        text={"Solicitar Paseo"}>
                            // Enviar request al paseador para aceptar el paseo
                    </Button>
                </View>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={mostrarModal}
                onRequestClose={() => {
                    setMostrarModal(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ActivityIndicator size="large" color="#0984E3" />
                        <Text>Espere por favor. Estamos procesando su solicitud...</Text>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default ViewDogWalker;
