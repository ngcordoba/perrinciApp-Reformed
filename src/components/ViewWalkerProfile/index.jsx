import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Button from '../Button';
import ImgBackground from '../ImgBackground/Background';
import { colors } from '../../theme/colors';
import { fontSizes } from '../../theme/fonts';
import React from 'react';

const ViewWalkerProfile = ({ route }) => {
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
                <Text style={styles.label}>{actives.name}</Text>
                <Text style={styles.label}>Calificacion: {actives.score}</Text>
                <Text style={styles.label}>Paseos completados: {actives.finishedWalks}</Text>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("HomeScreen")}
                        text={"Solicitar Paseo"}>
                    </Button>

                    <TouchableOpacity
                        style={styles.buttonChat}
                        onPress={() => navigation.navigate("HomeScreen")}
                        text={"Chatear"}>
                    </TouchableOpacity>

                    <Button
                        onPress={() => navigation.navigate("HomeScreen")}
                        text={"Volver al menu"}>
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
        height: 30,
        fontSize: fontSizes.text,
        marginVertical: 5,
        margin: "10%",
        alignItems: "center"
    },

    containerList: {
        backgroundColor: colors.brand.white,
        height: '75%',
        width: '90%',
        borderRadius: 20,
        alignSelf: "center",
    },

    buttonChat: {
        backgroundColor: "yellow"
    },

    buttonContainer: {
        marginTop: 25,
        alignItems: "center"
    }
});