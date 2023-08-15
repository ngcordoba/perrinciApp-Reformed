import { Text, SafeAreaView, StatusBar, View, TextInput, FlatList } from 'react-native';
import React from 'react';
import styles from './style';
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

import ImgBackground from '../../../components/ImageBackground';
import WalkerQualifications from '../../../components/Walker_Qualification'
import { useSelector } from 'react-redux'


const WalkerProfile = () => {


    const walker_Qualifications = useSelector(state => state.walker_Qualifications.walker_qualifications)

    const renderwalker_Qualifications = ({ item }) => (
        <View style={styles.listOfQualifications}>
            <WalkerQualifications item={item} />
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }} >
            <ImgBackground />
            <View style={styles.photoContainer}>
                <View>

                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text>Nombre y apellido</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="person" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <Text>Nro. de celular</Text>
                <TextInput
                    style={styles.input}>
                    <Ionicons name="call" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                </TextInput>

                <View style={styles.razapeContainer}>
                    <View style={styles.razapeTextInputContainer}>
                        <Text>Paseos</Text>
                        <TextInput
                            style={styles.inputWeightAge}>
                            <Entypo name="fingerprint" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                        </TextInput>
                    </View>

                    <View style={styles.razapeTextInputContainer}>
                        <Text>Calificacion prom.</Text>
                        <TextInput
                            style={styles.inputWeightAge}>
                            <Entypo name="star" size={22} color="gray" style={{ position: 'absolute', top: 10, left: 10 }} />
                        </TextInput>
                    </View>

                </View>


                <Text>Calificaciones</Text>


                <View style={styles.qualiListContainer}>

                    <View style={styles.containerList}>
                        <FlatList
                            data={walker_Qualifications}
                            renderItem={renderwalker_Qualifications}
                            keyExtractor={item => item.id}
                        >

                        </FlatList>

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default WalkerProfile;