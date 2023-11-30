import React, { useState } from 'react';
import { Text, SafeAreaView, StatusBar, View, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import LocationUser from '../../../components/Location_UserSingIn';


const UserRegister = ({ route, navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState('');
    const [department, setDepartment] = useState('');
    const [number, setNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [dni, setDni] = useState('');

    const user = route.params?.usuario.user;
    const email = route.params?.usuario.email;
    const password = route.params?.usuario.password;

    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        console.log(location)
    };

    const handleSubmit = () => {
        if (!firstName || !lastName || !street || !phone || !dni) {
            Alert.alert('Por favor complete los campos vacíos');
        } else {
            const datosUsuario = {
                firstName,
                lastName,
                phone,
                direccion: {
                    street,
                    number,
                    department,
                    coordinates: selectedLocation ? selectedLocation.coordinates : null,
                    formattedAddress: selectedLocation ? selectedLocation.address : null,
                },
                dni,
                user,
                email,
                password,
            };

            console.log(datosUsuario);
            // 
            navigation.navigate("RegistroPerro", datosUsuario);
        }
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
                    <Text>Nombre</Text>
                    <TextInput
                        value={firstName}
                        onChangeText={setFirstName}
                        style={styles.input}
                        placeholder='Ingresa tu nombre/s'
                    />
                    <Text>Apellido</Text>
                    <TextInput
                        value={lastName}
                        onChangeText={setLastName}
                        style={styles.input}
                        placeholder='Ingresa tu apellido/s'
                    />

                    <Text>Nro. de Celular</Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        style={styles.input}
                        placeholder='Ingresa tu número de celular'
                    />
                    <Text>DNI</Text>
                    <TextInput
                        value={dni}
                        onChangeText={setDni}
                        style={styles.input}
                        placeholder='Ingresa tu DNI'
                    />

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

export default UserRegister;
