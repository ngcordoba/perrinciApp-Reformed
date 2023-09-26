import { Text, SafeAreaView, StatusBar, View, TextInput, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'
import UserNavigator from '../../../navigation/UserNavigator';
import { WalkerNavigator } from '../../../navigation/WalkerNavigator'

const SingIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useNavigation();


    const handleSubmit = () => {
        if (!email || !password) {
            Alert.alert('Por favor complete los campos vacíos')
        }

        // FETCH => enviar usuario y contraseña. recibo el 200, con el objeto usuario, usuario.user
        if (email == "Paseador") {
            navigation.push("InicioPaseador", { WalkerNavigator })
        } else {
            navigation.navigate("InicioPaseador", { WalkerNavigator })
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
                        title="¿Olvidaste tu contraseña?"></Button>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SingIn;