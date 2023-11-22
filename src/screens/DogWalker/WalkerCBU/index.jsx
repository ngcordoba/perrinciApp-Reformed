import { Text, SafeAreaView, StatusBar, View, TextInput, FlatList } from 'react-native';
import React from 'react';
import styles from './style';
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

import ImgBackground from '../../../components/ImageBackground';
import WalkerQualifications from '../../../components/Walker_Qualification'
import { useSelector } from 'react-redux'


const WalkerProfile = () => {

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>

            </View>

            <View style={styles.inputContainer}>
                <Text>CBU/CVU</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="person" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>


            </View>

        </SafeAreaView >
    )
}

export default WalkerProfile;