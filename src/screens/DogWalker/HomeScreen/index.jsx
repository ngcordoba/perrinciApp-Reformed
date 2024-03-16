import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style';
import Button from '../../../components/ButtonRegular';
import ImgBackground from '../../../components/ImageBackground'

import { useWalker } from '../../../context/WalkerContext';


const HomeScreen = () => {

    const navigation = useNavigation();
    const { walker } = useWalker()

    return (

        <View style={styles.container}>
            <ImgBackground />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{`Hola ${walker ? walker.firstName : 'Usuario'}`}</Text>
            </View>

            <Button
                onPress={() => navigation.navigate("EmpezarAPasear")}
                text={"Empezar a pasear"}>
            </Button>


        </View>

    )
}

export default HomeScreen;