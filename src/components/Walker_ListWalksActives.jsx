import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { fontSizes } from "../theme/fonts"
import { Button } from 'react-native';

const ListWalksActives = ({ item, onSelected }) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => onSelected(item)}
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
                <Button title='Ya llegué' />
                <Button title='Volviendo' />
                <Button title='Ya volví' />
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
