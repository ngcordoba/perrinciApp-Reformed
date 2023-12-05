import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style';
import Button from '../../../components/ButtonRegular';
import ImgBackground from '../../../components/ImageBackground'

const RideFinished = () => {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ImgBackground />
            <View style={styles.textContainer}>
                <Text style={styles.text}>¡Tu paseo a finalizado con exito!</Text>
                <Text style={styles.text}>Muchas gracias por tu aporte</Text>
            </View>

            <Button
                onPress={() => navigation.navigate("MapView_DogWalker")}
                text={"Volver al mapa"}>
            </Button>

        </View>

    )
}

export default RideFinished;