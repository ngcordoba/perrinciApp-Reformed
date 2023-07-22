import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style';
import Button from '../../../components/ButtonRegular';
import ImgBackground from '../../../components/ImageBackground'


const HomeScreen = () => {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ImgBackground />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Hola Paseador</Text>
            </View>

            <Button
                onPress={() => navigation.navigate("EmpresarAPasear")}
                text={"Empezar a pasear"}>
            </Button>


        </View>

    )
}

export default HomeScreen;