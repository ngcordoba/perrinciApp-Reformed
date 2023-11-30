import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Map from '../constants/Map';

const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [userAddress, setUserAddress] = useState('');

    useEffect(() => {
        getLocationPermission();
    }, []);

    const getLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permisos de ubicación',
                'Debes permitir el acceso a la ubicación para usar este componente.',
                [{ text: 'OK' }]
            );
            return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);
        reverseGeocode(currentLocation.coords);
    };

    const reverseGeocode = async (coords) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=${Map.API_KEY}`
            );
            const data = await response.json();

            if (data.results.length > 0) {
                const formattedAddress = data.results[0].formatted_address;
                setUserAddress(formattedAddress); // Actualiza la dirección en el estado del usuario
                console.log(formattedAddress);
            }
        } catch (error) {
            console.log('Error en la geocodificación inversa:', error);
        }
    };

    return (
        <View style={styles.mapContainer}>
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker coordinate={location} />
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        alignItems: 'center',
    },
    map: {
        height: '95%',
        width: '90%',
        borderRadius: 20,
    },
});

export default MapScreen;
