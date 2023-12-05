import React, { useState } from 'react';
import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import LocationUser from '../../../components/Location_UserSingIn';


const UserRegister_Address = ({ route, navigation }) => {

    const [street, setStreet] = useState('');
    const [department, setDepartment] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [locate, setLocate] = useState('');


    const datosUsuario = route.params;
    const location = datosUsuario.location
    const firstName = datosUsuario.name;
    const lastName = datosUsuario.lastName;
    const phone = datosUsuario.phone;
    const dni = datosUsuario.dni;
    const user = datosUsuario.user;
    const email = datosUsuario.email;
    const password = datosUsuario.password;

    const handleSubmit = () => {
        if (!street || !number || !department) {
            Alert.alert('Por favor complete los campos vacíos');
        } else {
            const datosUsuario = {
                firstName,
                lastName,
                phone,
                coordenates: {
                    location
                },
                dni,
                user,
                email,
                password,
                address: {
                    street,
                    department,
                    number,
                    neighborhood,
                    locate

                }
            };

            console.log(datosUsuario);
            // 
            navigation.navigate("RegistroPerro", datosUsuario);
        }
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        console.log(location)
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }}>
                <LocationUser onLocationSelect={handleLocationSelect} />
                <ImgBackground />
                <View style={styles.inputContainer}>
                    <Text style={styles.textHeader}>
                        Completa los datos de tu domicilio
                    </Text>

                    <Text>Calle</Text>
                    <TextInput
                        value={street}
                        onChangeText={setStreet}
                        style={styles.input}
                        placeholder='Ingresa la calle de tu hogar'
                    />
                    <View style={styles.inlineInputContainer}>

                        <View style={styles.inlineInput}>
                            <Text>Altura</Text>
                            <TextInput
                                value={number}
                                onChangeText={setNumber}
                                style={styles.inputStreetandNumber}
                                placeholder='Altura'
                            />
                        </View>

                        <View style={styles.inlineInput}>
                            <Text>Departamento</Text>
                            <TextInput

                                value={department}
                                onChangeText={setDepartment}
                                style={styles.inputStreetandNumber}
                                placeholder='Departamento'
                            />
                        </View>
                    </View>

                    <View style={styles.inlineInputContainer}>

                        <View style={styles.inlineInput}>
                            <Text>Barrio</Text>
                            <TextInput
                                value={neighborhood}
                                onChangeText={setNeighborhood}
                                style={styles.inputStreetandNumber}
                                placeholder='Barrio'
                            />
                        </View>

                        <View style={styles.inlineInput}>
                            <Text>Localidad</Text>
                            <TextInput

                                value={locate}
                                onChangeText={setLocate}
                                style={styles.inputStreetandNumber}
                                placeholder='Localidad'
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonPr
                            onPress={handleSubmit}
                            text={"Siguiente"}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default UserRegister_Address;
