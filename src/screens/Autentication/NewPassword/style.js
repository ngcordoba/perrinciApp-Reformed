import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { fontSizes, fontWeights } from "../../../theme/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        height: "50%",
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

    textContainer: {
        margin: "10%",
        alignItems: "center"
    },

    text: {
        color: colors.text.secondary,
        fontSize: fontSizes.text,
        fontWeight: fontWeights.regular,
    },

    buttonContainer: {
        alignItems: 'center',
        marginTop: "5%",
        height: "20%"
    },



});

export default styles;