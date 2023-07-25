import { Text, SafeAreaView, StatusBar, View, TextInput, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'


const SingUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = () => {
        if (!email || !password || !confirmEmail || !confirmPassword) {
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
                <Text>Correo electrónico</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder='Ingresar correo electrónico'>
                </TextInput>

                <Text>Reingrese correo electrónico</Text>
                <TextInput
                    value={confirmEmail}
                    onChangeText={setConfirmEmail}
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

                <Text>Reingrese contraseña</Text>
                <TextInput
                    value={confirmPassword}
                    secureTextEntry
                    onChangeText={setConfirmPassword}
                    placeholder='Ingresar contraseña'
                    style={styles.input}>
                </TextInput>

                <View style={styles.buttonContainer}>
                    <ButtonPr
                        onPress={("")}
                        text={"Siguiente"}>
                    </ButtonPr>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SingUp;