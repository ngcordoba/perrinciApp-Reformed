import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'


const DogRegister = () => {

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState('');
    const [raza, setRaza] = useState('');


    const handleSubmit = () => {
        if (!nombre || !edad) {
            Alert.alert('Los campos Nombre y Edad son obligatorios')
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
                    onChangeText={setNombre}
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
                    placeholder='Raza (No obligatorio)'
                    style={styles.input}>
                </TextInput>


                <View style={styles.buttonContainer}>
                    <ButtonPr
                        // Confirmar SingUp y redirigir a Sing In
                        onPress={(handleSubmit) => navigation.navigate("IniciarSesión")}
                        text={"Confirmar"}>
                    </ButtonPr>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default DogRegister;