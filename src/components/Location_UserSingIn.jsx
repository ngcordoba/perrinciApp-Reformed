import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import Map from '../constants/Map';

const LocationUser = ({ onLocationSelect }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        getLocationPermission();
    }, []);

    const getLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
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

            if (response.ok) {
                console.log('Geocoding Response:', data);

                if (data.results.length > 0) {
                    const formattedAddress = data.results[0].formatted_address;
                    onLocationSelect({ coordinates: coords, address: formattedAddress });
                } else {
                    console.log('No se encontraron resultados de geocodificación.');
                }
            } else {
                console.log('Error en la respuesta de la API de geocodificación:', data.error_message || 'Error desconocido');
            }
        } catch (error) {
            console.log('Error en la geocodificación inversa:', error);
        }
    };

    return <View style={styles.container} />;
};

const styles = StyleSheet.create({

});

export default LocationUser;