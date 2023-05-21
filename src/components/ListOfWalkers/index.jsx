import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { fontSizes } from "../../theme/fonts"

const ListOfWalkers = ({ item, onSelected }) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onSelected(item)}
        >
            <View style={styles.contentContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: item.img }}

                />

                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.scoreText}>Calificación: {item.score}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ListOfWalkers;

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

