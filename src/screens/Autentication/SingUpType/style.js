import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { fontSizes } from "../../../theme/fonts";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoContainer: {
        alignItems: 'center',
        height: '25%',
        width: '40%',
        borderRadius: 20,
        marginBottom: "5%",
        margin: "10%"

    },

    button: {
        backgroundColor: "white",
        margin: "5%",
        width: "33%",
        height: "50%",
        borderRadius: 15,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: colors.brand.primary,
        fontSize: "18",
        alignSelf: "center"
    },

    title: {
        fontSize: fontSizes.subtitle,
        color: colors.brand.primary
    }
});

export default styles;