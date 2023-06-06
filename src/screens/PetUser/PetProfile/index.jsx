import { Text, SafeAreaView, StatusBar, View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import React from 'react';
import styles from "./styles"
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native'


const PetProfile = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>
                <View>

                </View>

            </View>

            <View style={styles.inputContainer}>
                <Text>Nombre</Text>
                <TextInput
                    style={styles.input}>
                    <Entypo name="baidu" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <View style={styles.razapeContainer}>
                    <View style={styles.razapeTextInputContainer}>
                        <Text>Edad</Text>
                        <TextInput
                            style={styles.inputWeightAge}>
                            <Entypo name="pin" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                        </TextInput>
                    </View>

                    <View style={styles.razapeTextInputContainer}>
                        <Text>Peso</Text>
                        <TextInput
                            style={styles.inputWeightAge}>
                            <Entypo name="baidu" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                        </TextInput>
                    </View>
                </View>

                <View style={styles.razapeContainer}>
                    <View style={styles.razapeTextInputContainer}>
                        <Text>Raza</Text>
                        <TextInput
                            style={styles.inputWeightAge}>
                            <Entypo name="fingerprint" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                        </TextInput>
                    </View>

                    <View style={styles.razapeTextInputContainer}>
                        <Text>Calificacion prom.</Text>
                        <TextInput
                            style={styles.inputWeightAge}>
                            <Entypo name="star" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                        </TextInput>
                    </View>
                </View>

                <Text>Paseos completados</Text>
                <TextInput
                    style={styles.input}>
                    <Entypo name="trophy" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("PerfilUsuario")}
                        text={"Volver a mi perfil"}>
                    </Button>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default PetProfile;

