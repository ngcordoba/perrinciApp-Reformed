import { Text, SafeAreaView, StatusBar, View, FlatList, Button } from 'react-native';
import React from 'react';

import styles from './styles';
import ImgBackground from '../../../components/ImageBackground';
import PerrinciButton from '../../../components/ButtonRegular';
import ListWalksActives from "../../../components/Walker_ListWalksActives"
import { useSelector } from 'react-redux';


const WalksActives = ({ navigation }) => {

    const walksActives = useSelector(state => state.walker_WalksActives.walker_walksActives)



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
                        onPress={() => navigation.navigate("EmpezarAPasear")}
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