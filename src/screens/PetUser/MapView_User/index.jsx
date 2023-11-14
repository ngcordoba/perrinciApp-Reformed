import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../../../components/User_LocationMap';
import Button from '../../../components/ButtonRegular';

const MapViewUser = () => {

    const navigation = useNavigation();
    return (
        /* En esta screen se mostrará desde que la persona entrega
         A la mascota hasta la finalización del paseo
         Es una misma screen que se va a actualizando (Se actualiza la ubicación del
         paseador) */
        <SafeAreaView style={styles.container}>
            <MapScreen />
            <Button
                onPress={() => navigation.navigate("CalificarPaseador")}
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