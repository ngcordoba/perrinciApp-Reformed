import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style';
import Button from '../../../components/ButtonRegular';
import ImgBackground from '../../../components/ImageBackground'

const FinishWalk = () => {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ImgBackground />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Su calificación fue enviada</Text>
                <Text style={styles.text}>Muchas gracias por su aporte</Text>
            </View>

            <Button
                onPress={() => navigation.navigate("TabUserNav")}
                text={"Volver al inicio"}>
            </Button>

        </View>

    )
}

export default FinishWalk;