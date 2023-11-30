import { StyleSheet } from 'react-native'
import { fontSizes } from '../../../theme/fonts';
import { colors } from '../../../theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        height: "30%",
        alignItems: "center"
    },

    photoContainer: {
        height: '70%',
        width: '40%',
        margin: '10%',
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    detailsContainer: {
        height: '60%',
        width: '90%',
        backgroundColor: colors.brand.white,
        alignSelf: "center",
        borderRadius: 15
    },

    label: {
        maxWidth: "90%",
        height: "12%",
        fontSize: fontSizes.text,
        marginVertical: 5,
        margin: "10%",
        padding: "5%",
    },

    containerList: {
        backgroundColor: colors.brand.gray,
        height: '75%',
        width: '90%',
        borderRadius: 20,
        alignSelf: "center",
    },

    buttonContainer: {
        marginTop: 25,
        alignItems: "center"
    }
});

export default styles;