import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { fontSizes } from "../theme/fonts"
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListWalksActives = ({ item }) => {

    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                style={styles.itemContainer}
            >
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.dogAvatar }}

                    />

                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>{item.dogName}</Text>
                        <Text style={styles.infoText}>{item.userAddress} </Text>
                        <Text style={styles.infoText}>Dueño: {item.userName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <View style={styles.buttonContainer}>
                <Button key="imhere" title='Ya llegué' />
                <Button key="backto" title='Volviendo' />
                <Button key="imback" title='Ya volví' />
                <Button onPress={() => navigation.replace("PaseoFinalizadoWalker")} 
                key="finished" 
                title='Finalizar'/>
            </View>

        </View>
    );
};

export default ListWalksActives;

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignContent: "flex-start",
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: "100%",
        marginRight: 16,
        borderRadius: 70,
    },
    textContainer: {
        flex: 1,
    },
    nameText: {
        fontSize: fontSizes.text,
        marginBottom: "2%",
        color: "black"
    },
    infoText: {
        fontSize: fontSizes.body,
        marginBottom: "2%",
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
});
