import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { fontSizes } from "../../../theme/fonts";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center', // Centrar verticalmente
        padding: 10, // Margen a los lados
    },

    textHeader: {
        color: colors.brand.primary,
        fontSize: fontSizes.title,
        margin: 15,
        marginBottom: "25%",
        textAlign: "center"
    },

    scrollViewContent: {
        alignItems: 'center',
        flexGrow: 1,
    },

    photoContainer: {
        alignItems: 'center',
        height: '25%',
        width: '40%',
        borderRadius: 20,
        marginBottom: "5%",
        margin: "10%"
    },

    inputContainer: {
        height: "50%",
        margin: "20%"

    },

    input: {
        width: 220,
        height: "15%",
        backgroundColor: colors.brand.secondary,
        margin: "2%",
        borderRadius: 15,
        paddingLeft: 15,
        marginBottom: "5%"
    },

    inputStreetandNumber: {
        width: 110,
        height: 55, // Altura ajustada
        backgroundColor: colors.brand.secondary,
        marginVertical: 10, // Margen arriba y abajo
        borderRadius: 15,
        paddingLeft: 15,
    },

    inlineInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inlineInput: {
        flex: 1,
        marginRight: "10%",
    },

    buttonContainer: {
        alignItems: 'center',
        marginTop: "10%",
        height: "20%"
    },
});

export default styles;
