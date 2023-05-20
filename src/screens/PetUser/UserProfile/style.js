import { StyleSheet } from "react-native";
import { fontSizes } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    textHeader: {
        color: colors.brand.primary,
        fontSize: fontSizes.text,
        margin: 40,
    },

    photoContainer: {
        alignItems: 'center',
        backgroundColor: "white",
        height: '20%',
        width: '40%',
        borderRadius: 20,
        shadowOffset: { width: 0.5, height: 0.5, },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        marginBottom: "10%",
        margin: "10%"

    },

    inputContainer: {
        height: "50%",
    },

    input: {
        width: 250,
        height: "15%",
        backgroundColor: colors.brand.secondary,
        margin: 5,
        borderRadius: 15,
        padding: 10,
    },

    buttonContainer: {
        paddingTop: "1.5%",
        alignItems: 'center',
        marginTop: "15%",
        height: "20%"
    },





});

export default styles;