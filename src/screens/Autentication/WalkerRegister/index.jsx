import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';


const WalkerRegister = ({ route, navigation }) => {

    const [walkerFirstName, setWalkerFirstName] = useState("");
    const [walkerLastName, setWalkerLastName] = useState("");
    const [walkerPhone, setWalkerPhone] = useState('');
    const [dni, setDni] = useState('');
    const [cbu, setCbu] = useState('');
    const [alias, setAlias] = useState('');


    const user = route.params?.usuario.user;
    const email = route.params?.usuario.email; // Obtener el email por parametros
    const password = route.params?.usuario.password; // Obtener el password por parametros


    const handleSubmit = () => {
        if (!walkerFirstName || !walkerLastName || !dni || !walkerPhone) {
            Alert.alert('Por favor complete los campos vacíos');
        } else {
            // Crear un objeto con los datos adicionales
            const userWalker = {
                user,
                email,
                password,
                walkerFirstName,
                walkerLastName,
                walkerPhone,
                dni,
                cbu,
                alias,
            };

            console.log(userWalker)

            // Fin de registro de paseador. Vuelvo a iniciar sesión con el usuario creado
            navigation.navigate("IniciarSesion", userWalker);
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />

            <View style={styles.inputContainer}>
                <Text style={styles.titleInputs}>Nombre</Text>
                <TextInput
                    value={walkerFirstName}
                    onChangeText={setWalkerFirstName}
                    style={styles.input}
                    placeholder='Ingresa tu nombre/s'>
                </TextInput>

                <Text style={styles.titleInputs}>Apellido</Text>
                <TextInput
                    value={walkerLastName}
                    onChangeText={setWalkerLastName}
                    style={styles.input}
                    placeholder='Ingresa tu apellido/s'>
                </TextInput>

                <Text style={styles.titleInputs}>Nro. de Celular</Text>
                <TextInput
                    value={walkerPhone}
                    onChangeText={setWalkerPhone}
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
                        // Confirmar y Redirigir a SingIg
                        onPress={handleSubmit}
                        text={"Confirmar"}>
                    </ButtonPr>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default WalkerRegister;