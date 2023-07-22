import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import React from 'react';
import styles from './style';
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

import ImgBackground from '../../../components/ImageBackground';
import { useNavigation } from '@react-navigation/native'


const WalkerProfile = () => {

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

                <Text>Nro. de celular</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="call" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <View style={styles.razapeContainer}>
                    <View style={styles.razapeTextInputContainer}>
                        <Text>Paseos</Text>
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

            </View>
        </SafeAreaView>
    )
}

export default WalkerProfile;