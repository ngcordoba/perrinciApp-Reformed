import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ButtonRegular from '../../../components/ButtonRegular'
import React from 'react'



const Pago_MercadoPago = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text> Pago_MercadoPago</Text>
            <ButtonRegular
                onPress={() => navigation.navigate("PaseoEnCurso")}
                text={"Continuar"}>
                            // Enviar request al paseador para aceptar el paseo
            // Una vez aceptado, se obtiene la ubicación del paseador
            // Y avanzo a la siguiente pantalla (Mapa)
            </ButtonRegular>
        </View >
    )
}

export default Pago_MercadoPago

const styles = StyleSheet.create({})