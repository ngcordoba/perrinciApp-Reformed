import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./styles"

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