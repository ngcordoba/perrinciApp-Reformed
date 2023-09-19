import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';


const DogRegister = ({ route, navigation }) => {

    const [dogName, setDogName] = useState("");
    const [age, setAge] = useState('');
    const [raza, setRaza] = useState('');


    const datosUsuario = route.params; // Obtener datos anteriores
    const firstName = datosUsuario.name;
    const lastName = datosUsuario.lastName;
    const phone = datosUsuario.phone;
    const address = datosUsuario.address;
    const dni = datosUsuario.dni;
    const user = datosUsuario.user;
    const email = datosUsuario.email;
    const password = datosUsuario.password;


    const handleSubmit = async () => {
        if (!dogName || !age) {
            Alert.alert('Los campos Nombre y Edad son obligatorios')
        } else {
            // Agregar los nuevos datos al objeto datosCompletos
            const fullUser = {
                firstName,
                lastName,
                phone,
                address,
                dni,
                user,
                email,
                password,
                perro: {
                    dogName,
                    age,
                    raza,
                }

            };


            console.log(fullUser)

            try {
                const response = await fetch('', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fullUser),
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
                    value={dogName}
                    onChangeText={setDogName}
                    style={styles.input}
                    placeholder='Nombre de tu mascota'>
                </TextInput>

                <Text>Edad</Text>
                <TextInput
                    value={age}
                    onChangeText={setAge}
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