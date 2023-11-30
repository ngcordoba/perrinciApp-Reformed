import { Text, SafeAreaView, StatusBar, View, TextInput, FlatList } from 'react-native';
import React from 'react';
import styles from './style';
import { Ionicons } from '@expo/vector-icons'

import ImgBackground from '../../../components/ImageBackground';
import { useState } from 'react';


const WalkerCBU = () => {

    const [cbu, setCBU] = useState("")
    const [alias, setAlias] = useState("")


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>

            </View>

            <View style={styles.inputContainer}>
                <Text>CBU/CVU</Text>
                <TextInput
                    value={cbu}
                    onChangeText={setCBU}
                    style={styles.input}>
                    <Ionicons name="wallet" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <Text>Alias</Text>
                <TextInput
                    value={alias}
                    onChangeText={setAlias}
                    style={styles.input}>
                    <Ionicons name="wallet" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>


            </View>

        </SafeAreaView >
    )
}

export default WalkerCBU;