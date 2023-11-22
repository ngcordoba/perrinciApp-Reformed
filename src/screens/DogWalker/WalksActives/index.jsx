import { Text, SafeAreaView, StatusBar, View, FlatList, Button } from 'react-native';
import React from 'react';

import styles from './styles';
import ImgBackground from '../../../components/ImageBackground';
import PerrinciButton from '../../../components/ButtonRegular';
import ListWalksActives from "../../../components/Walker_ListWalksActives"
import { useSelector } from 'react-redux';


const WalksActives = ({ navigation, route }) => {

    const walksActives = useSelector(state => state.walker_WalksActives.walker_walksActives)
    const walkerState = route.params?.walkerState;
    console.log(walkerState)


    const handleSelectUser = (item) => {
        navigation.navigate("VerPerfilUsuario", {
            userInfo: item,
        });
    };

    const renderListOfWalksActives = ({ item }) => (
        <View >
            <ListWalksActives item={item} onSelected={handleSelectUser} />
        </View>
    )

    const handleFinalizarActividad = () => {
        const walkerState = false;
        navigation.navigate("TabWalkerNav", { walkerState });
        console.log(walkerState)
    };


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Tus paseos activos
                </Text>
            </View>

            <View style={styles.walkerListContainer}>
                <View style={styles.containerList}>
                    <FlatList
                        data={walksActives}
                        renderItem={renderListOfWalksActives}
                        keyExtractor={item => item.id} />

                </View>

                <View style={styles.buttonContainer}>

                    <PerrinciButton
                        onPress={(handleFinalizarActividad)}
                        text={"Finalizar actividad"}>
                    </PerrinciButton>

                    <Button
                        onPress={() => navigation.navigate("EmpezarAPasear")}
                        title="Volver al mapa">
                    </Button>

                </View>





            </View>

        </SafeAreaView>
    )

}

export default WalksActives;