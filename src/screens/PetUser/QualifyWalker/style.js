import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { index } from "../../../theme/index"
import { fontSizes } from "../../../theme/fonts";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    text: {
        fontSize: fontSizes.subtitle
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
        alignItems: "center",
    },
    input: {
        width: 250,
        height: 50,
        backgroundColor: colors.brand.secondary,
        borderRadius: 15,
        paddingLeft: 15,
        marginTop: "5%"
    },
    buttonContainer: {
        paddingTop: "1.5%",
        alignItems: 'center',
        marginTop: "15%",
        height: "20%",
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%'
    },
});

export default styles;