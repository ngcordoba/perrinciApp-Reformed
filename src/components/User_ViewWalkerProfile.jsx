import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react';

import Button from './ButtonRegular';
import ImgBackground from './ImageBackground';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native'
import { fontSizes } from '../theme/fonts';

const ViewWalkerProfile = ({ route }) => {

    // const actives = useSelector(state => state.walkers.selected)
    const navigation = useNavigation();
    const actives = route.params.walkerInfo;

    return (
        <SafeAreaView style={styles.container}>
            <ImgBackground />
            <View style={styles.contentContainer}>
                <View style={styles.photoContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: actives.img }}
                    />
                </View>

            </View>

            <View style={styles.detailsContainer}>

                <Text style={styles.label}>Calificacion: {actives.score}</Text>
                <Text style={styles.label}>Paseos completados: {actives.finishedWalks}</Text>
                <Text style={styles.label}>Precio por paseo: ${actives.price}</Text>
                <Text style={styles.label}>Tiempo de paseo: {actives.durationWalk} hs.</Text>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("PagoPaseo")}
                        text={"Solicitar Paseo"}>
                            // Enviar request al paseador para aceptar el paseo
                    </Button>



                </View>



            </View>
        </SafeAreaView>
    );
}

export default ViewWalkerProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        height: "30%",
        alignItems: "center"
    },

    photoContainer: {
        height: '70%',
        width: '40%',
        margin: '10%',
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    detailsContainer: {
        height: '60%',
        width: '90%',
        backgroundColor: colors.brand.white,
        alignSelf: "center",
        borderRadius: 15
    },

    label: {
        maxWidth: "90%",
        height: "12%",
        fontSize: fontSizes.text,
        marginVertical: 5,
        margin: "10%",
        padding: "5%",
    },

    containerList: {
        backgroundColor: colors.brand.white,
        height: '75%',
        width: '90%',
        borderRadius: 20,
        alignSelf: "center",
    },

    buttonContainer: {
        marginTop: 25,
        alignItems: "center"
    }
});