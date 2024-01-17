import React, { useEffect } from "react";
import { Text, Modal, View, StyleSheet, Button } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import PerrinciButton from "./ButtonRegular";

export default function Walker_Modal({ isModalOpen, setIsModalOpen }) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    // Cierra el modal cuando la pantalla se enfoca nuevamente
    useEffect(() => {
        if (isFocused) {
            setIsModalOpen(false);
        }
    }, [isFocused]);

    return (
        <>
            <Modal visible={isModalOpen} transparent={true} animationType="slide">
                <View style={styles.modalContainerStyle}>
                    <View style={styles.modalStyle}>
                        <Text style={[styles.modalTitle, { textAlign: "center", alignSelf: "center" }]}>
                            ¡Tenés una solicitud de paseo pendiente!
                        </Text>
                        <View style={styles.modalContain}>
                            <PerrinciButton
                                text={"Visualizar Perfil"}
                                onPress={() => {
                                    navigation.navigate("VerPerfilUsuario");
                                    setIsModalOpen(false); // Cierra el modal al navegar
                                }}
                            />
                            <Button title="Ocultar solicitud" onPress={() => setIsModalOpen(!setIsModalOpen)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modalContainerStyle: {
        flex: 1,
        justifyContent: "flex-end",
    },

    modalStyle: {
        backgroundColor: "white",
        alignItems: "center",
        margin: 30,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        shadowColor: "#000",
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
        marginBottom: "5%",
    },
});