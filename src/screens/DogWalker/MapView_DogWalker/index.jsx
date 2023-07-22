import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../../../components/User_LocationMap';
import Button from '../../../components/ButtonRegular';

const MapViewWalker = () => {

    const navigation = useNavigation();
    return (
        /* El MapScreen solicita los permisos al usuario
        para acceder a la ubicación en tiempo real.
        Se muestra el mapa con la ubicación del paseador. */
        <SafeAreaView style={styles.container}>
            <MapScreen />
            <Button onPress={() => navigation.navigate("PaseosActivos")} />
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