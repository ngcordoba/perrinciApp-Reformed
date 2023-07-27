import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import ImgBackground from '../../../components/ImageBackground';

const tipoDeRegistro = () => {
    return (
        <View style={styles.container}>
            <ImgBackground />
            <Text>Registrarse como</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Usuario Común</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Usuario Paseador</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default tipoDeRegistro;