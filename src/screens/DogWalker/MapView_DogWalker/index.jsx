import { SafeAreaView, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../../../components/User_LocationMap';
import ButtonPr from '../../../components/ButtonRegular';
import Walker_Modal from '../../../components/Walker_Modal';

const MapViewWalker = () => {
    // El MapScreen solicita los permisos al usuario para acceder a la ubicación en tiempo real.
    const [isModalOpen, setIsModalOpen] = useState(false)

    const navigation = useNavigation();
    return (

        // Ubicación del paseador.
        <SafeAreaView style={styles.container}>

            <MapScreen />
            <Button title='Ver solicitud' onPress={() => setIsModalOpen(!isModalOpen)} />

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
});

export default MapViewWalker;