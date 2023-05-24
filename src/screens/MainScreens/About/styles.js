import { StyleSheet } from "react-native";
import { fontSizes } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    textHeader: {
        color: colors.brand.primary,
        fontWeight: "bold",
        fontSize: fontSizes.title,
        margin: 40,
    },

    walkerListContainer: {
        alignItems: 'center',

    },

    containerList: {
        backgroundColor: colors.brand.white,
        height: '80%',
        width: '80%',
        borderRadius: 20,
    },

    buttonContainer: {
        backgroundColor: "red",
        marginTop: 25,
    }


});

export default styles;