import { Text, SafeAreaView, StatusBar, View, TextInput, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'


const ForgotPassword = () => {

    const [email, setEmail] = useState("");



    const handleSubmit = () => {
        if (!email) {
            Alert.alert('Por favor complete los campos vacíos')
        }
        return;
    }

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />

            <Image source={require('../../../assets/images/perrinciLogo.png')} style={styles.photoContainer} />

            <Text>Reestablecer Contraseña</Text>
            <View style={styles.inputContainer}>

                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder='Ingrese su correo electrónico'>
                </TextInput>

                <View style={styles.buttonContainer}>
                    <ButtonPr
                        onPress={(handleSubmit) => navigation.navigate("NuevaContrasena")}
                        text={"Siguiente"}>
                    </ButtonPr>
                </View>


            </View>

        </SafeAreaView>
    )
}

export default ForgotPassword;