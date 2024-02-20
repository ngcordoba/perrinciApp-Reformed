import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import React from 'react';
import styles from "./styles"

import ImgBackground from '../../../components/ImageBackground';
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../../../context/UserContext';


const PetProfile = () => {

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
                <Text>Nombre</Text>
                <TextInput
                    style={styles.input}
                    value={user.Dog.dogName}
                    editable={false}>
                    
                </TextInput>

                <View style={styles.razapeContainer}>
                    <View style={styles.razapeTextInputContainer}>
                        <Text>Edad</Text>
                        <TextInput
                            style={styles.inputWeightAge}
                            value={user.Dog.dogAge}>
                        </TextInput>
                    </View>

                    <View style={styles.razapeTextInputContainer}>
                        <Text>Peso</Text>
                        <TextInput
                            style={styles.inputWeightAge}
                            value={user.Dog.dogWeight}>
                        </TextInput>
                    </View>
                </View>

                <View style={styles.razapeContainer}>
                    <View style={styles.razapeTextInputContainer}>
                        <Text>Raza</Text>
                        <TextInput
                            style={styles.inputWeightAge}
                            value={user.Dog.dogRaza}
                            editable={false}>
                        </TextInput>
                    </View>

                    <View style={styles.razapeTextInputContainer}>
                        <Text>Calificacion prom.</Text>
                        <TextInput
                            style={styles.inputWeightAge}
                            editable={false}>
                        </TextInput>
                    </View>
                </View>

                <Text>Paseos completados</Text>
                <TextInput
                    style={styles.input}
                    editable={false}>
                </TextInput>


            </View>

        </SafeAreaView >
    )
}

export default PetProfile;

