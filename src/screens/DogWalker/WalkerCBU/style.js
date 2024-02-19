import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { fontSizes } from '../../../theme/fonts';

const styles = StyleSheet.create({

    inputContainer: {
        marginTop: '50%',
        height: '8%',
        width: "70%",
        alignItems: "center"
    },

    titleinput: {
        alignSelf: 'stretch'
    },

    input: {
        width: 220,
        height: "100%",
        backgroundColor: colors.brand.secondary,
        margin: "2%",
        borderRadius: 15,
        paddingLeft: 15,
        marginBottom: "3%"
    },

    buttonContainer: {
        marginTop: "10%"
    }

});

export default styles;
