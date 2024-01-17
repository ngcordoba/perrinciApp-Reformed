import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';


const WalkerRegister = ({ route, navigation }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState('');
    const [dni, setDni] = useState('');
    const [cbu, setCbu] = useState('');
    const [alias, setAlias] = useState('');


    const user = route.params?.usuario.user;
    const email = route.params?.usuario.email; // Obtener el email por parametros
    const password = route.params?.usuario.password; // Obtener el password por parametros


    const handleSubmit = () => {
        if (!firstName || !lastName || !dni || !phone) {
            Alert.alert('Por favor complete los campos vacíos');
        } else {
            // Crear un objeto con los datos adicionales
            const userWalker = {
                user,
                email,
                password,
                firstName,
                lastName,
                phone,
                dni,
                cbu,
                alias,
            };

            console.log(userWalker)

            // Fin de registro de paseador. Vuelvo a iniciar sesión con el usuario creado
            navigation.navigate("RegistroPaseador_direccion", userWalker);
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
                <ImgBackground />


                <View style={styles.inputContainer}>

                    <Text style={styles.titleInputs}>Nombre</Text>
                    <TextInput
                        value={firstName}
                        onChangeText={setFirstName}
                        style={styles.input}
                        placeholder='Ingresa tu nombre/s'>
                    </TextInput>

                    <Text style={styles.titleInputs}>Apellido</Text>
                    <TextInput
                        value={lastName}
                        onChangeText={setLastName}
                        style={styles.input}
                        placeholder='Ingresa tu apellido/s'>
                    </TextInput>

                    <Text style={styles.titleInputs}>Nro. de Celular</Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        placeholder='Ingresa tu número de celular'
                        style={styles.input}>
                    </TextInput>

                    <Text style={styles.titleInputs}>DNI</Text>
                    <TextInput
                        value={dni}
                        onChangeText={setDni}
                        placeholder='Ingresa tu DNI'
                        style={styles.input}>
                    </TextInput>

                    <Text style={styles.titleInputs}>CBU/CVU</Text>
                    <TextInput
                        value={cbu}
                        onChangeText={setCbu}
                        placeholder='Ingresa CBU de Mercado Pago'
                        style={styles.input}>
                    </TextInput>

                    <Text style={styles.titleInputs}>Alias</Text>
                    <TextInput
                        value={alias}
                        onChangeText={setAlias}
                        placeholder='Ingresa tu Alias de Mercado Pago'
                        style={styles.input}>
                    </TextInput>



                    <View style={styles.buttonContainer}>
                        <ButtonPr
                            // Confirmar y Redirigir a completar los datos de la dirección
                            onPress={handleSubmit}
                            text={"Siguiente"}>
                        </ButtonPr>
                    </View>
                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default WalkerRegister;