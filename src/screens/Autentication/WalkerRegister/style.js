import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { fontSizes } from "../../../theme/fonts";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    photoContainer: {
        alignItems: 'center',
        height: '25%',
        width: '40%',
        borderRadius: 20,
        marginBottom: "5%",
        margin: "10%"

    },

    inputContainer: {
        height: "40%",
        margin: "30%"
    },

    input: {
        width: 220,
        height: "15%",
        backgroundColor: colors.brand.secondary,
        margin: "2%",
        borderRadius: 15,
        paddingLeft: 15,
        marginBottom: "3%"
    },

    titleInputs: {
        margin: "3%"
    },


    buttonContainer: {
        alignItems: 'center',
        marginTop: "20%",
        height: "20%"
    },





});

export default styles;