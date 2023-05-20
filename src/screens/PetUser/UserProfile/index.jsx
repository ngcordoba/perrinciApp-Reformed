import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import React from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImgBackground/Background';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native'


const Profile = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>
                <View>
                    <Text>Foto</Text>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text>Nombre y apellido</Text>
                <TextInput style={styles.input}></TextInput>
                <Text>Direccion</Text>
                <TextInput style={styles.input}></TextInput>
                <Text>Nro. de celular</Text>
                <TextInput style={styles.input}></TextInput>
                <Text>Correo electronico</Text>
                <TextInput style={styles.input}></TextInput>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("PetProfile")}
                        text={"Perfil de mi mascota"}>
                    </Button>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Profile