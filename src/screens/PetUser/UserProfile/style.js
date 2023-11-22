import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    photoContainer: {
        alignItems: 'center',
        backgroundColor: "white",
        height: '20%',
        width: '40%',
        borderRadius: 20,
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
        margin: "2%",
        borderRadius: 15,
        padding: 25,
        paddingLeft: "15%",
    },


    buttonContainer: {
        alignItems: 'center',
        marginTop: "10%",
        height: "20%"
    },





});

export default styles;