import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    inputContainer: {
        height: "50%",
        marginTop: "20%"
    },

    input: {
        margin: "20%",
        width: 250,
        height: "15%",
        backgroundColor: colors.brand.secondary,
        margin: 5,
        borderRadius: 15,
        padding: 10,
        paddingLeft: 15,
    },

});

export default styles;