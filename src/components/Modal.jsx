import { StyleSheet, Text, View, Button, Modal as NewModal } from 'react-native'
import React from 'react'

const Modal = ({ isVisible }) => {
    return (
        <NewModal visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalStyle}>
                    <Text style={styles.modalTextStyle}>Hola, estoy bucando un paseador</Text>
                    <Button title="Eliminar" color={"red"} fontWeight={500} />

                </View>
            </View>
        </NewModal>
    )
}

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end"
    },

    modalStyle: {
        backgroundColor: "white",
        margin: 20,
        borderRadius: 16,
        paddingHorizontal: 30,
        paddingVertical: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        bottom: 30,
    },

    modalTextStyle: {
        fontWeight: "500",
        textAlign: "center",
        padding: 10
    }

})