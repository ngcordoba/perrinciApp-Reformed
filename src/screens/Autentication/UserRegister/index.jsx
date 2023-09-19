import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';


const UserRegister = ({ route, navigation }) => {

    const [firstName, setFirtsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [dni, setDni] = useState('');


    const user = route.params?.usuario.user; // Obtener el tipo de usuario por parametros
    const email = route.params?.usuario.email; // Obtener el email por parametros
    const password = route.params?.usuario.password; // Obtener el password por parametros


    const handleSubmit = () => {
        if (!firstName || !lastName || !address || !phone || !dni) {
            Alert.alert('Por favor complete los campos vacíos')
        } else {
            // Crear un objeto con los datos adicionales
            const datosUsuario = {
                firstName,
                lastName,
                phone,
                address,
                dni,
                user,
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
                    value={firstName}
                    onChangeText={setFirtsName}
                    style={styles.input}
                    placeholder='Ingresa tu nombre/s'>
                </TextInput>

                <Text>Apellido</Text>
                <TextInput
                    value={lastName}
                    onChangeText={setLastName}
                    style={styles.input}
                    placeholder='Ingresa tu apellido/s'>
                </TextInput>

                <Text>Dirección</Text>
                <TextInput
                    value={address}
                    onChangeText={setAddress}
                    style={styles.input}
                    placeholder='Ingresa la dirección de tu hogar'>
                </TextInput>


                <Text>Nro. de Celular</Text>
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
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