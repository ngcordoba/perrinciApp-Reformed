import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../../../components/User_LocationMap';
import Button from '../../../components/ButtonRegular';

const MapViewUser = () => {

    const [walkerLocation, setWalkerLocation] = useState(null);
    const [walkStatus, setWalkStatus] = useState(true);
    const navigation = useNavigation();

    /* Componente padre
    Voy a recibir a partir de una peticion al back, la ubicacion del paseador y estado del paseo (entre 
    otros datos)
    Esos datos los voy a mandar por props al MapScreen, para generar un Marker del paseador actualizandose
    cada 5 segudos. De esta forma el usuario vera la ubicacion en tiempo real del paseador.

    Cuando el paseador finaliza el paseo, se actualiza el estado del paseo para el dogOwner, para poder entrar
    en el IF y avanzar a la siguiente pantalla.
    */ 

    useEffect(() => {
        const interval = setInterval (() => {
            // Peticion al back para obtener la ubicacion del paseador
            const updatedLocation = ""
            setWalkerLocation(updatedLocation);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleFinishWalk = () => {
        setWalkStatus("")
    }
    
    useEffect(() => {
        if (walkStatus === "finished") {
            navigation.navigate("CalificarPaseador");
        }
    }, [walkStatus]);

    return (
        
        <SafeAreaView style={styles.container}>
            <MapScreen />
            <Button
                onPress={() => navigation.replace("CalificarPaseador")}
                text={"Test Calification"}>
            </Button>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default MapViewUser;