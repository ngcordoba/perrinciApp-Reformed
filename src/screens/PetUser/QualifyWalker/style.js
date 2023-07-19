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
        shadowOffset: { width: 0.5, height: 0.5, },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        marginBottom: "10%",
        margin: "10%"

    },

    inputContainer: {
        height: "50%",
        alignItems: "center"
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





});

export default styles;