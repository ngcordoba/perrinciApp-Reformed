import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';
import ImgBackground from '../../../components/ImageBackground';
import { useNavigation } from '@react-navigation/native'

const TipoDeRegistro = () => {

    const navigation = useNavigation();

    const navigateToRegistroUsuario = () => {
        // Pasar el tipo de usuario como parámetro a la siguiente pantalla
        navigation.navigate("Registrarse", { user: "Usuario" });
    };

    const navigateToRegistroPaseador = () => {
        // Pasar el tipo de usuario como parámetro a la siguiente pantalla
        navigation.navigate("Registrarse", { user: "Paseador" });
    };


    return (
        <View style={styles.container}>
            <ImgBackground />

            <Image source={require('../../../assets/images/perrinciLogo.png')} style={styles.photoContainer} />

            <Text style={styles.title}>Registrarse como</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={navigateToRegistroUsuario}>
                    <Text style={styles.buttonText}>Usuario</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={navigateToRegistroPaseador}>
                    <Text style={styles.buttonText}>Paseador</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default TipoDeRegistro;