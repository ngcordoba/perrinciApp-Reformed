import { Text, SafeAreaView, StatusBar, View, TextInput, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'

const SingIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useNavigation();


    const handleSubmit = () => {
        if (!email || !password) {
            Alert.alert('Por favor complete los campos vacíos')
        }

        // FETCH => enviar usuario y contraseña. recibo el 200, con el objeto usuario, usuario.user
        if (email == "usuario") {
            navigation.navigate('User');
        } else {
            navigation.navigate('DogWalker');
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />

            <Image source={require('../../../assets/images/perrinciLogo.png')} style={styles.photoContainer} />


            <View style={styles.inputContainer}>
                <Text>Correo electrónico</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder='Ingresar correo electrónico'>
                </TextInput>


                <Text>Contraseña</Text>
                <TextInput
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                    placeholder='Ingresar contraseña'
                    style={styles.input}>
                </TextInput>

                <View style={styles.buttonContainer}>
                    <ButtonPr
                        onPress={(handleSubmit)}
                        text={"Iniciar sesión"}>
                    </ButtonPr>

                    <ButtonPr
                        onPress={() => navigation.navigate("RegistrarseComo")}
                        text={"Registrarse"}>
                    </ButtonPr>
                    <Button
                        onPress={() => navigation.navigate("ResetearContrasena")}
                        title="¿Olvidaste tu contraseña?"></Button>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SingIn;
