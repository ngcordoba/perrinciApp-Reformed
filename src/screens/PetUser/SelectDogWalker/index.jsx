import { Text, SafeAreaView, StatusBar, View, FlatList } from 'react-native';
import React from 'react';

import styles from './style';
import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/Button';
// import { WALKERS } from '../../../data/walkers';
import ListOfWalkers from '../../../components/ListWalkersActives';
import { useSelector } from 'react-redux';

const SelectDogWalker = ({ navigation, route }) => {

    const walkers = useSelector(state => state.walkers.walkers)
    const walkersActives = walkers.filter(walkers => walkers.isActive === true)

    const handleSelectWalker = (item) => {
        navigation.navigate("VerPerfilDelPaseador", {
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
                        data={walkersActives}
                        renderItem={renderListOfWalkers}
                        keyExtractor={item => item.id} />

                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("InicioUsuario")}
                        text={"Volver al menu"}>
                    </Button>
                </View>

            </View>

        </SafeAreaView>
    )

}

export default SelectDogWalker