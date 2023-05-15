import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../../../components/Button'

const Profile = () => {

    const navigation = useNavigation();

    return (

        <View>
            <Text> Perfil usuario </Text>
            <Button
                text={"Perfil de mi mascota"}
                onPress={() => navigation.navigate("DogProfile")}>
            </Button>
        </View>


    )
}

export default Profile