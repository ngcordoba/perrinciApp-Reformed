import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'


const DogRegister = ({ route, navigation }) => {

    const [nombrePerro, setNombrePerro] = useState("");
    const [edad, setEdad] = useState('');
    const [raza, setRaza] = useState('');


    const datosUsuario = route.params; // Obtener datos anteriores
    const nombre = datosUsuario.nombre;
    const apellido = datosUsuario.apellido;
    const numeroCelular = datosUsuario.numeroCelular;
    const direccion = datosUsuario.direccion;
    const dni = datosUsuario.dni;
    const tipoUsuario = datosUsuario.tipoUsuario;
    const email = datosUsuario.email;
    const password = datosUsuario.password;


    const handleSubmit = async () => {
        if (!nombre || !edad) {
            Alert.alert('Los campos Nombre y Edad son obligatorios')
        } else {
            // Agregar los nuevos datos al objeto datosCompletos
            const user = {
                nombre,
                apellido,
                numeroCelular,
                direccion,
                dni,
                tipoUsuario,
                email,
                password,
                perro: {
                    nombre,
                    edad,
                    raza,
                }  // Datos anteriores

            };


            console.log(user)

            /*
            "perro":{
                ...nombre,
                ...edad,
                ...raza,
            } 

            */

            try {
                const response = await fetch('', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                if (response.ok) {
                    console.log("Datos guardados correctamente");
                    navigation.navigate('IniciarSesion');
                } else {
                    Alert.alert('Error al enviar los datos')
                }
            } catch (error) {
                console.error('error:', error);
            }

        }
    }



    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />

            <Image source={require('../../../assets/images/perrinciLogo.png')} style={styles.photoContainer} />


            <View style={styles.inputContainer}>
                <Text>Nombre</Text>
                <TextInput
                    value={nombrePerro}
                    onChangeText={setNombrePerro}
                    style={styles.input}
                    placeholder='Nombre de tu mascota'>
                </TextInput>

                <Text>Edad</Text>
                <TextInput
                    value={edad}
                    onChangeText={setEdad}
                    style={styles.input}
                    placeholder='Edad de tu mascota'>
                </TextInput>


                <Text>Raza</Text>
                <TextInput
                    value={raza}
                    onChangeText={setRaza}
                    placeholder='Raza'
                    style={styles.input}>
                </TextInput>


                <View style={styles.buttonContainer}>
                    <ButtonPr
                        // Confirmar SingUp y redirigir a Sing In
                        onPress={handleSubmit}
                        text={"Confirmar"}>
                    </ButtonPr>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default DogRegister;