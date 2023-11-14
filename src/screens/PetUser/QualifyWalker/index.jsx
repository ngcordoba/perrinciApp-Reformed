import { Text, SafeAreaView, StatusBar, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react'; // Importa useState
import styles from './style';
import { Ionicons } from '@expo/vector-icons'

import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native'

const WalkerQualify = () => {
    const navigation = useNavigation();
    const [rating, setRating] = useState(0); // Estado para la puntuación
    const [comment, setComment] = useState(''); // Estado para los comentarios

    const handleRatingChange = (value) => {
        // Actualiza la puntuación
        setRating(value);
    };

    const handleCommentChange = (text) => {
        // Actualiza los comentarios
        setComment(text);
    };

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss(); // Cierre del teclado al presionar fuera del area de escritura.
    };



    const handleSendRating = () => {
        console.log('Puntuación:', rating);
        console.log('Comentarios:', comment);
        navigation.navigate("PaseoFinalizado");
    };


    return (
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
            <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }}>
                <ImgBackground />
                <View style={styles.photoContainer}>
                    <View>
                        {/* Agrega la imagen y el texto del paseador si es necesario */}
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Calificá la atencion del paseador</Text>
                    {/* Logica para calificar con estrellas */}
                    <View style={styles.starContainer}>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <Ionicons
                                key={value}
                                name="star"
                                size={32}
                                color={rating >= value ? "gold" : "gray"}
                                onPress={() => handleRatingChange(value)}
                            />
                        ))}
                    </View>

                    <Text style={styles.text}>Comentarios Adicionales</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Añadir comentarios"
                        onChangeText={(text) => handleCommentChange(text)}
                        value={comment}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={100}
                        blurOnSubmit={true} // Cierra el teclado al presionar "return o done"
                    />

                    <View style={styles.buttonContainer}>
                        <Button onPress={handleSendRating} text={"Enviar calificación"} />
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default WalkerQualify;
