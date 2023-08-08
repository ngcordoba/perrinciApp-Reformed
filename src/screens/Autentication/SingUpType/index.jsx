import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';
import ImgBackground from '../../../components/ImageBackground';

const TipoDeRegistro = () => {
    return (
        <View style={styles.container}>
            <ImgBackground />

            <Image source={require('../../../assets/images/perrinciLogo.png')} style={styles.photoContainer} />
            <Text style={styles.title}>Registrarse como</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate("RegistroUsuario")}>
                    <Text style={styles.buttonText}>Usuario</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate("RegistroPaseador")}>
                    <Text style={styles.buttonText}>Paseador</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default TipoDeRegistro;