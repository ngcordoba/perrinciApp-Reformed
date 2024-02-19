import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import React from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../../../context/UserContext';


const Profile = () => {

    const { user } = useUser();
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
                    style={styles.input}
                    value={user.nombre}>
                </TextInput>


                <Text>Direccion</Text>
                <TextInput
                    style={styles.input}
                >
                </TextInput>

                <Text>Nro. de celular</Text>
                <TextInput
                    style={styles.input}
                    value={user.celular}>
                </TextInput>

                <Text>Correo electronico</Text>
                <TextInput
                    style={styles.input}
                    value={user.email}>
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