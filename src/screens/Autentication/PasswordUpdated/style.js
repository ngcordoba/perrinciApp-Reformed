import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { fontSizes, fontWeights } from "../../../theme/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textContainer: {
        margin: "10%",
        alignItems: "center",

    },

    text: {
        color: colors.text.secondary,
        fontSize: fontSizes.text,
        textAlign: "center",
    }



});

export default styles;