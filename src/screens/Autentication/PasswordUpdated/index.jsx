import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style';
import Button from '../../../components/ButtonRegular';
import ImgBackground from '../../../components/ImageBackground'

const PasswordUpdated = () => {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ImgBackground />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Su contraseña ha sido modificada con exito</Text>
            </View>

            <Button
                onPress={() => navigation.navigate("LoginPage")}
                text={"Volver al inicio"}>
            </Button>

        </View>

    )
}

export default PasswordUpdated;