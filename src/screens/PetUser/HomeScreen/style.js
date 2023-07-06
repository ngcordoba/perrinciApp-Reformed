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
    },

    text: {
        color: colors.text.secondary,
        fontSize: fontSizes.text,
        fontWeight: fontWeights.regular,
    }


});

export default styles;