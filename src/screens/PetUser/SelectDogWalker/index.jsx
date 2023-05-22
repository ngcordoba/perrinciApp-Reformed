import { Text, SafeAreaView, StatusBar, View, FlatList } from 'react-native';

import React from 'react';
import styles from './style';
import ImgBackground from '../../../components/ImgBackground/Background';
import Button from '../../../components/Button';
import { WALKERACTIVES } from '../../../data/walkersActives';
import ListOfWalkers from '../../../components/ListOfWalkers';

const SelectDogWalker = ({ navigation, route }) => {

    const actives = WALKERACTIVES.filter(actives => actives.isActive === true)

    const handleSelectWalker = (item) => {
        navigation.navigate("ViewWalkerProfile", {
            walkerInfo: item,
            name: item.name,
            lastName: item.lastName,
        });
    };

    const renderListOfWalkers = ({ item }) => (
        <View style={styles.listOfWalkers}>
            <ListOfWalkers item={item} onSelected={handleSelectWalker} />
        </View>
    )


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Selecciona a tu paseador
                </Text>
            </View>

            <View style={styles.walkerListContainer}>
                <View style={styles.containerList}>
                    <FlatList
                        data={actives}
                        renderItem={renderListOfWalkers}
                        keyExtractor={item => item.id} />

                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("HomeScreen")}
                        text={"Volver al menu"}>
                    </Button>
                </View>

            </View>

        </SafeAreaView>
    )

}

export default SelectDogWalker