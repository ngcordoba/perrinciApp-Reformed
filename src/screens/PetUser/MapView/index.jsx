import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../../../components/User_LocationMap';

const MapViewUser = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MapScreen />
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