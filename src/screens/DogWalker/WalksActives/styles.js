import { StyleSheet } from "react-native";
import { fontSizes } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    textHeader: {
        color: colors.brand.primary,
        fontSize: fontSizes.title,
        margin: 40,
    },

    walkerListContainer: {
        alignItems: 'center',

    },

    containerList: {
        backgroundColor: colors.brand.white,
        height: '65%',
        width: '90%',
        justifyContent: "flex-start",
        borderRadius: 20,
    },

    buttonContainer: {
        marginTop: 25,
    }


});

export default styles;