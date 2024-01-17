import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { fontSizes } from '../../../theme/fonts';

const styles = StyleSheet.create({

    photoContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: '30%',
        margin: '5%',
    },

    inputContainer: {
        height: '8%',
        width: "70%"
    },

    input: {
        paddingLeft: 15,
    },

    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        height: "95%",
        backgroundColor: colors.brand.secondary,
        margin: 5,
        borderRadius: 15,
        paddingLeft: 15,
    },

    razapeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '6%',
    },

    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },


    inputWeightAge: {
        flex: 1,
        backgroundColor: colors.brand.secondary,
        borderRadius: 15,
    },

    qualiListContainer: {
        alignItems: 'center',
    },

    containerList: {
        margin: '10%',
        backgroundColor: colors.brand.secondary,
        width: '110%',
        height: '120%',
        borderRadius: 20,
    },



    editButton: {
        color: colors.brand.primary,
        fontSize: fontSizes.buttonsCustom,
        fontWeight: 'bold',
        margin: "5%",
        marginBottom: "10%",
        alignSelf: "center"
    },

    saveButton: {
        color: colors.brand.primary,
        fontSize: fontSizes.buttonsCustom,
        fontWeight: 'bold',
        alignSelf: "center",
        marginBottom: "10%"
    },
});

export default styles;
