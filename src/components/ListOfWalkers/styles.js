import { StyleSheet } from "react-native";
import { fontSizes } from "../../theme/fonts"
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignContent: "flex-start"
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: "100%",
        marginRight: 16,
        borderRadius: 25,
    },
    textContainer: {
        flex: 1,
    },
    nameText: {
        fontSize: fontSizes.text,
        marginBottom: 4,
        color: "black"
    },
    scoreText: {
        fontSize: fontSizes.subtitle,
    },
});

export default styles;