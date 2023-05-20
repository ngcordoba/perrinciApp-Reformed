import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';
import { fontSizes } from '../../theme/fonts';

const ButtonRegular = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.buttonText}> {text} </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.brand.primary,
        width: 220,
        height: 55,
        borderRadius: 15,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center"
    },


    buttonText: {
        color: colors.text.white,
        fontSize: fontSizes.buttonText

    }


});


export default ButtonRegular;