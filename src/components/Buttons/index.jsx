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


/*
const Button = styled.TouchableOpacity`
    background-color: #0984E3;
    color: "#0984E3";
    width: 60%;
    height: 55px;
    border-radius: 15px;
    margin-bottom: 30px;  
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px;
    align-items: center;
    justify-content: center;
`;


const ButtonText = styled.Text`
    color: ${props => theme.colors.text.white} 
    font-size: 18px
`;

*/

export default ButtonRegular;