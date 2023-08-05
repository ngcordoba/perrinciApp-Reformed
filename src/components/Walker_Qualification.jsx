import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { fontSizes } from "../theme/fonts"

const QualificationsWalker = ({ item }) => {
    return (
        <View
            style={styles.itemContainer}
            onPress={() => onSelected(item)}
        >
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text >Usuario: {item.userName} </Text>

                    <Text >{item.score} ★ - {item.comment}</Text>
                </View>
            </View>
        </View>
    );
};

export default QualificationsWalker;

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
        width: 70,
        height: "90%",
        marginRight: 16,
        borderRadius: "40%",
    },
    textContainer: {
        flex: 1,
    },
    nameText: {
        fontSize: fontSizes.body,
        marginBottom: 4,
        color: "black"
    },
    scoreText: {
        fontSize: fontSizes.subtitle,
    },
});