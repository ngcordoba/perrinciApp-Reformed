import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import React from 'react';
import styles from './style';
import { Ionicons } from '@expo/vector-icons'

import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'

const WalkerQualify = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>
                <View>

                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text>Calificá el servicio del paseador</Text>
                <Text>Estrellas 1 a 5</Text>



                <Text>Comentarios Adicionales</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="location-sharp" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>



                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("PaseoFinalizado")}
                        text={"Enviar calificación"}>
                        // Enviar y guardar calificación en BD
                    </Button>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default WalkerQualify;