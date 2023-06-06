import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { fontSizes } from "../../theme/fonts"

const ActivityUser = ({ item }) => {
    return (
        <View
            style={styles.itemContainer}
            onPress={() => onSelected(item)}
        >
            <View style={styles.contentContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: item.img }}

                />

                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{item.walkerName} {item.walkerLastName}</Text>
                    <Text style={styles.scoreText}>{item.date}</Text>
                    <Text style={styles.scoreText}>${item.price}</Text>
                </View>
            </View>
        </View>
    );
};

export default ActivityUser;

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
        height: "80%",
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