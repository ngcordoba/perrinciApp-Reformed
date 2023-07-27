import { Text, SafeAreaView, StatusBar, View, TextInput, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'


const UserRegister = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState('');
    const [numeroCelular, setNumeroCelular] = useState('');


    const handleSubmit = () => {
        if (!nombre || !apellido || !direccion || !numeroCelular) {
            Alert.alert('Por favor complete los campos vacíos')
        }
        return;
    }

    const navigation = useNavigation();

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


                <View style={styles.buttonContainer}>
                    <ButtonPr
                        // Redirigir a DogRegister
                        onPress={(handleSubmit) => navigation.navigate("RegistroPerro")} // handleSubmit y navegar
                        text={"Siguiente"}>
                    </ButtonPr>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default UserRegister;