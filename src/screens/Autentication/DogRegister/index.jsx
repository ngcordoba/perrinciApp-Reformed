import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, Image, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';


const DogRegister = ({ route, navigation }) => {

    const [dogName, setDogName] = useState("");
    const [age, setAge] = useState('');
    const [raza, setRaza] = useState('');


    const datosUsuarioAddress = route.params; // Obtener datos anteriores
    const firstName = datosUsuarioAddress.name;
    const lastName = datosUsuarioAddress.lastName;
    const phone = datosUsuarioAddress.phone;
    const location = datosUsuarioAddress.location
    const dni = datosUsuarioAddress.dni;
    const user = datosUsuarioAddress.user;
    const password = datosUsuarioAddress.password;

    const street = datosUsuarioAddress.street;
    const number = datosUsuarioAddress.number;
    const department = datosUsuarioAddress.department;
    const neighborhood = datosUsuarioAddress.neighborhood;
    const state = datosUsuarioAddress.state;

    const email = datosUsuarioAddress.email;


    const handleSubmit = async () => {
        if (!dogName || !age) {
            Alert.alert('Los campos Nombre y Edad son obligatorios')
        } else {
            // Agregar los nuevos datos al objeto datosCompletos
            const fullUser = {
                firstName,
                lastName,
                phone,
                coordenates: {
                    location
                },
                dni,
                user,
                email,
                password,
                address: {
                    street,
                    department,
                    number,
                    neighborhood,
                    state
                },
                perro: {
                    dogName,
                    age,
                    raza,
                }

            };


            console.log(fullUser)

            /*
            try {
                const response = await fetch('http://localhost:3000/users', {
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
            */
            navigation.navigate('IniciarSesion');
        }
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}
        >
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
        </KeyboardAvoidingView>
    )
}

export default DogRegister;