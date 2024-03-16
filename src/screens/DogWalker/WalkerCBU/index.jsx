import { Text, SafeAreaView, StatusBar, View, TextInput } from 'react-native';
import React from 'react';
import styles from './style';

import ImgBackground from '../../../components/ImageBackground';
import ButtonRegular from '../../../components/ButtonRegular';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useWalker } from '../../../context/WalkerContext';


const WalkerCBU = () => {

    const [cbu, setCBU] = useState("")
    const [alias, setAlias] = useState("")
    const navigation = useNavigation();
    const { walker } = useWalker();


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>

            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.titleinput}>CBU/CVU</Text>
                <TextInput
                    value={walker.walker.cbu}
                    onChangeText={setCBU}
                    style={styles.input}>
                </TextInput>

                <Text style={styles.titleinput}>Alias</Text>
                <TextInput
                    value={walker.walker.alias}
                    onChangeText={setAlias}
                    style={styles.input}>
                </TextInput>

                <View style={styles.buttonContainer}>
                <ButtonRegular
                onPress={navigation.goBack}
                text={"Volver atras"}
                />
                </View>
                


            </View>

        </SafeAreaView >
    )
}

export default WalkerCBU;