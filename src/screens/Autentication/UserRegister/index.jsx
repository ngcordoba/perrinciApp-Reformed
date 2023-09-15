import { Text, SafeAreaView, StatusBar, View, TextInput, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';


const UserRegister = ({ route, navigation }) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState('');
    const [numeroCelular, setNumeroCelular] = useState('');
    const [dni, setDni] = useState('');

    console.log(route)
    const tipoUsuario = route.params?.usuario.tipoUsuario; // Obtener el tipo de usuario por parametros
    const email = route.params?.usuario.email; // Obtener el email por parametros
    const password = route.params?.usuario.password; // Obtener el password por parametros


    const handleSubmit = () => {
        if (!nombre || !apellido || !direccion || !numeroCelular || !dni) {
            Alert.alert('Por favor complete los campos vacíos')
        } else {
            // Crear un objeto con los datos adicionales
            const datosUsuario = {
                nombre,
                apellido,
                numeroCelular,
                direccion,
                dni,
                tipoUsuario,
                email,
                password,
            };



            console.log(datosUsuario)
            navigation.navigate("RegistroPerro", datosUsuario);
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
                    onChangeText={setNombre}
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

                <Text>Dirección</Text>
                <TextInput
                    value={direccion}
                    onChangeText={setDireccion}
                    style={styles.input}
                    placeholder='Ingresa la dirección de tu hogar'>
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
                    placeholder='Ingresa tu DNI'
                    style={styles.input}>
                </TextInput>


                <View style={styles.buttonContainer}>
                    <ButtonPr
                        // Redirigir a DogRegister
                        onPress={handleSubmit}
                        text={"Siguiente"}>
                    </ButtonPr>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default UserRegister;