import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import React from 'react';
import styles from './style';
import { Ionicons } from '@expo/vector-icons'

import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native'


const Profile = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>
                <View>

                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text>Nombre y apellido</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="person" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>


                <Text>Direccion</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="location-sharp" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <Text>Nro. de celular</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="call" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <Text>Correo electronico</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="mail" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("PerfilMascota")}
                        text={"Perfil de mi mascota"}>
                    </Button>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Profile;