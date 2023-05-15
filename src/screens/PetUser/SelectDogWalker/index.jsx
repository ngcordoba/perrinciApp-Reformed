import { Text, SafeAreaView, StatusBar, View } from 'react-native';
import React from 'react';
import styles from './style';
import ImgBackground from '../../../constants/Background/Background';
import Button from '../../../components/Buttons';
import { useNavigation } from '@react-navigation/native'

const SelectDogWalker = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: 'white' }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Selecciona a tu paseador
                </Text>
            </View>

            <View style={styles.mapContainer}>
                <View style={styles.mapView}>
                    <Text>Listado de paseadores </Text>

                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("HomeScreen")}
                        text={"Volver al menu"}>
                    </Button>
                </View>

            </View>

        </SafeAreaView>
    )

}

export default SelectDogWalker