import { StyleSheet } from 'react-native';
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
        height: "10%",
        fontSize: fontSizes.text,
        marginVertical: 5,
        margin: "10%",
        padding: "5%",
    },
    atencionContainer: {
        marginTop: "5%",
        width: "95%",
        height: "20%",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    atencionTitle: {
        fontWeight: "bold",
        marginBottom: "1%",
        color: "red",
    },

    atencionText: {
        marginBottom: "1%",
        padding: '1%',
        color: "red",
    },

    buttonContainer: {
        marginTop: 25,
        alignItems: "center"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default styles;
