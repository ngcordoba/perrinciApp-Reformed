import React from 'react'
import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import styles from "./styles"
import ImgBackground from '../../../components/ImgBackground/Background';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native'

const PetProfile = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <Text style={styles.namePet}> KEVIN </Text>

            <View style={styles.container}>

                <View style={styles.photoContainer}>
                    <View>
                        <Text>Foto</Text>
                    </View>
                </View>

                <View style={styles.petInfoContainer}>
                    <View styles={styles.containerPesoRaza}>
                        <Text styles={styles.text}>Peso Hola Hola</Text>
                        <Text>Raza</Text>
                    </View>

                    <Text>Cantidad de paseos</Text>
                    <Text>Calificacion promedio: </Text>


                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => navigation.navigate("PetProfile")}
                            text={"Volver al menu"}>
                        </Button>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default PetProfile;