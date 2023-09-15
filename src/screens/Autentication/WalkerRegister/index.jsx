import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'


const WalkerRegister = ({ route, navigation }) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [numeroCelular, setNumeroCelular] = useState('');
    const [dni, setDni] = useState('');


    const tipoUsuario = route.params?.tipoUsuario; // Obtener el tipo de usuario por parametros
    const email = route.params?.email; // Obtener el email por parametros
    const password = route.params?.password; // Obtener el password por parametros


    const handleSubmit = () => {
        if (!nombre || !apellido || !dni || !numeroCelular) {
            Alert.alert('Por favor complete los campos vacíos');
        } else {
            // Crear un objeto con los datos adicionales
            const datosAdicionales = {
                nombre,
                apellido,
                numeroCelular,
                dni,
            };

            // Combinar los datos del tipo de usuario, email y datos adicionales
            const datosCompletosPaseador = {
                tipoUsuario,
                email,
                password,
                datosAdicionales,
            };

            // Fin de registro de paseador. Vuelvo a iniciar sesión con el usuario creado
            navigation.navigate("IniciarSesion", datosCompletosPaseador);
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />

            <Image source={require('../../../assets/images/perrinciLogo.png')} style={styles.photoContainer} />


            <View style={styles.inputContainer}>
                <Text>Nombre</Text>
                <TextInput
                    value={nombre}
                    onChangeText={setApellido}
                    style={styles.input}
                    placeholder='Ingresa tu nombre/s'>
                </TextInput>

                <Text>Apellido</Text>
                <TextInput
                    value={apellido}
                    onChangeText={setApellido}
                    style={styles.input}
                    placeholder='Ingresa tu apellido/s'>
                </TextInput>

                <Text>Nro. de Celular</Text>
                <TextInput
                    value={numeroCelular}
                    onChangeText={setNumeroCelular}
                    placeholder='Ingresa tu número de celular'
                    style={styles.input}>
                </TextInput>

                <Text>DNI</Text>
                <TextInput
                    value={dni}
                    onChangeText={setDni}
                    placeholder='Ingresa tu número de celular'
                    style={styles.input}>
                </TextInput>


                <View style={styles.buttonContainer}>
                    <ButtonPr
                        // Confirmar y Redirigir a SingIg
                        onPress={handleSubmit}
                        text={"Confirmar"}>
                    </ButtonPr>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default WalkerRegister;