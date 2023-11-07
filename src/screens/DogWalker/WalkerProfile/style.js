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
        margin: "5%"

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
        paddingLeft: 15,
    },


    buttonContainer: {
        paddingTop: "1.5%",
        alignItems: 'center',
        marginTop: "15%",
        height: "20%"
    },

    razapeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: "2%",
    },

    razapeTextInputContainer: {
        width: 130,

    },

    inputContainer: {
        height: "50%",
    },

    inputWeightAge: {
        width: 120,
        backgroundColor: colors.brand.secondary,
        margin: 5,
        borderRadius: 15,
        padding: "10%",
        paddingLeft: 15,
    },

    qualiListContainer: {
        alignItems: 'center',

    },

    containerList: {
        margin: "3%",
        backgroundColor: colors.brand.secondary,
        width: '100%',
        borderRadius: 20,
    },





});

export default styles;