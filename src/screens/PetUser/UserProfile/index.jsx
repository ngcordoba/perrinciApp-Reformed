import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import { Ionicons } from '@expo/vector-icons'

import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'


const Profile = () => {
    const navigation = useNavigation();

    const [userData, setUserData] = useState({
        nombreApellido: 'Cordoba',
        direccion: '',
        numeroCelular: '',
        correoElectronico: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>
                {/* Contenido del contenedor de la foto (si es necesario) */}
            </View>

            <View style={styles.inputContainer}>
                <InputWithIcon iconName="person" placeholder="Nombre y apellido" value={userData.nombreApellido} editable={false} />
                <InputWithIcon iconName="location-sharp" placeholder="Direccion" value={userData.direccion} editable={false} />
                <InputWithIcon iconName="call" placeholder="Nro. de celular" value={userData.numeroCelular} editable={false} />
                <InputWithIcon iconName="mail" placeholder="Correo electronico" value={userData.correoElectronico} editable={false} />

                <View style={styles.buttonContainer}>
                    <Button onPress={() => navigation.navigate("PerfilMascota")} text={"Perfil de mi mascota"} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const InputWithIcon = ({ iconName, placeholder }) => (
    <View>
        <Text>{placeholder}</Text>
        <View style={styles.input}>
            <Ionicons name={iconName} size={22} color="gray" style={{ position: 'absolute', top: 12, left: 10 }} />
            <TextInput style={{ flex: 1 }} value="" />
        </View>
    </View>
);

export default Profile;