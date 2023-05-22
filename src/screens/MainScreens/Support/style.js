import { StyleSheet } from "react-native";
import { Text, SafeAreaView, StatusBar, View } from 'react-native';
import { colors } from "../../../theme/colors";
import { fontSizes, fontWeights } from "../../../theme/fonts";


const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.brand.white,
    },

    textContainer: {
        alignItems: "center",

    },

    text: {
        color: colors.brand.primary,
        fontSize: fontSizes.title,
        margin: 40,
    },

    listContainer: {
        height: '60%',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    listText: {
        color: colors.brand.primary,
        fontSize: fontSizes.text,
        padding: "4%"
    },


});

export default styles;