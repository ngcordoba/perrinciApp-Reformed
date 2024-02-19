import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../../../components/User_LocationMap';
import Button from '../../../components/ButtonRegular';

const MapViewUser = () => {

    const [walkStatus, setWalkStatus] = useState(true)
    const navigation = useNavigation();

    /* la responde del backend, actualizada el walkstatus para poder
    entrar en el IF:
    ** logica/peticion del back **
    setWalkerStatus = "estado del paseo actualizado"
    */
    
    if(walkStatus === "finished") {
        navigation.navigate("CalificarPaseador")
    }

    return (
        /* En esta screen se mostrará desde que la persona entrega
         A la mascota hasta la finalización del paseo
         Es una misma screen que se va a actualizando (Se actualiza la ubicación del
         paseador) */

         // Tenemos que tener el estado del paseo, para que cuando este en FINALIZADO,
         // se redirija automaticamente a la pantalla de calificacion. 
        <SafeAreaView style={styles.container}>
            <MapScreen />
            <Button
                onPress={() => navigation.replace("CalificarPaseador")}
                text={"Test Calification"}>
            </Button>

        </SafeAreaView>

        /* Pasa a la siguiente screen una vez que el usuario paseador
        haya finalizado el paseo. */
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default MapViewUser;