import { StyleSheet } from "react-native";
import { fontSizes } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    textHeader: {
        color: colors.brand.primary,
        fontSize: 20,
        margin: 40,
    },

    mapContainer: {
        alignItems: 'center',

    },

    mapView: {
        backgroundColor: "white",
        height: '75%',
        width: '90%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },

    buttonContainer: {
        marginTop: 25,
        width: '55%',
    },

});

export default styles;