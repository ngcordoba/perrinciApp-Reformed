import { SafeAreaView, StyleSheet, Button, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapScreen from '../../../components/User_LocationMap';
import ButtonPr from '../../../components/ButtonRegular';
import Walker_Modal from '../../../components/Walker_Modal';

const MapViewWalker = () => {

    const route = useRoute();
    const walkerState = route.params?.walkerState;

    // El MapScreen solicita los permisos al usuario para acceder a la ubicación en tiempo real.
    const [isModalOpen, setIsModalOpen] = useState(false)

    const navigation = useNavigation();

    const handleSolicitudPaseo = () => {

        setIsModalOpen(true);

    };
    console.log(walkerState)

    return (


        // Ubicación del paseador.
        <SafeAreaView style={styles.container}>

            <MapScreen />
            <View style={styles.buttonsContainer} >
                <Button title='Ver solicitud' onPress={handleSolicitudPaseo} />
                <Button title='Mi recorrido' onPress={() => navigation.navigate("VerPaseosActivos", { walkerState })} />
            </View>

            {/* Este modal debe recibir la petición de paseo por parte del usuario para aparecer */}
            <Walker_Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </SafeAreaView >


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default MapViewWalker;