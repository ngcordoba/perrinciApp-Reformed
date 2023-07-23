import React from "react";
import { Text, Modal, View, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Button1 from "./ButtonRegular";

export default function Walker_Modal({ isModalOpen, setIsModalOpen }) {

    const navigation = useNavigation();
    return (
        <>
            <Modal visible={isModalOpen} transparent={true} animationType="slide">
                <View style={styles.modalContainerStyle}>
                    <View style={styles.modalStyle} >
                        <Text style={[styles.modalTitle, { textAlign: 'center', alignSelf: 'center' }]}> Hola, Soy Kevin, quiero dar un paseo, me buscas? </Text>
                        <View style={styles.modalContain}>
                            {/* En visualizar perfil, el paseador navegará a un componente con el "Objeto" User, y podrá volver al MapView para Aceptar o rechazar */}
                            <Button1 text={"Visualizar Perfil"} onPress={() => navigation.navigate("PerfilPaseador")} ></Button1>
                            {/* Alert avisando al usuario el paseo rechazado */}
                            <Button1 text={"Rechazar Paseo"}>  </Button1>
                            {/* Al aceptar, se envía la confirmación al User y se carga la dirección en el mapa del paseador. Se carga tambien un paseo en la lista de activos */}
                            <Button1 text={"Aceptar Paseo"}> </Button1>
                        </View>
                        <Button title="Ocultar solicitud" onPress={() => setIsModalOpen(!setIsModalOpen)} />
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modalContainerStyle: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    modalStyle: {
        backgroundColor: "white",
        alignItems: "center",
        margin: 20,
        borderRadius: 16,
        paddingHorizontal: 30,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalContain: {
        justifyContent: "center",
        alignSelf: "center",
    },

    modalTitle: {
        fontSize: 18,
        padding: 10,
    }
});
