import { Text, SafeAreaView, StatusBar, View, TextInput, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'


const NewPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSubmit = () => {
        if (!password) {
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

                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    placeholder='Ingrese su contraseña'>
                </TextInput>

                <TextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={styles.input}
                    placeholder='Reingrese contraseña'>
                </TextInput>

                <View style={styles.buttonContainer}>
                    <ButtonPr
                        onPress={(handleSubmit) => navigation.navigate("")}
                        text={"Confirmar"}>
                    </ButtonPr>
                </View>


            </View>

        </SafeAreaView>
    )
}

export default NewPassword;