import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    StatusBar,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { Ionicons, Entypo } from '@expo/vector-icons';
import ImgBackground from '../../../components/ImageBackground';
import WalkerQualifications from '../../../components/Walker_Qualification';
import styles from './style';

const WalkerProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedPhoneNumber, setEditedPhoneNumber] = useState('');
    const [editedPrice, setEditedPrice] = useState('');
    const [editedWalkTime, setEditedWalkTime] = useState('');

    // Estados para mantener los datos originales
    const [originalPhoneNumber, setOriginalPhoneNumber] = useState('Número original');
    const [originalPrice, setOriginalPrice] = useState('Precio original');
    const [originalWalkTime, setOriginalWalkTime] = useState('Tiempo de paseo');

    const [walkerQualifications, setWalkerQualifications] = useState([]);

    useEffect(() => {
        // Obtener datos de json-server
        fetch('http://localhost:3000/walkerQualifications')
            .then(response => response.json())
            .then(data => setWalkerQualifications(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const renderWalkerQualifications = ({ item }) => (
        <View style={styles.listOfQualifications}>
            <WalkerQualifications item={item} />
        </View>
    );

    const handlePhoneNumberChange = (text) => {
        setEditedPhoneNumber(text);
    };

    const handleSaveChanges = () => {
        Alert.alert(
            'Confirmar cambios',
            '¿Está seguro de que desea guardar los cambios?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Guardar',
                    onPress: () => {
                        // Backend
                        setIsEditing(false);
                        // Actualizar los datos originales
                        setOriginalPhoneNumber(editedPhoneNumber);
                        setOriginalPrice(editedPrice);
                        setOriginalWalkTime(editedWalkTime);
                    },
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }}>


            <ImgBackground />

            <View style={styles.photoContainer}>
                <View />
            </View>




            <View style={styles.inputContainer}>


                <Text>Nombre y apellido</Text>
                <View style={styles.inputWithIcon}>
                    <Ionicons name="person" size={22} color="gray" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        editable={false}
                        selectTextOnFocus={false}
                        value="Gabriel Cordoba"
                    />
                </View>

                <Text>Nro. de celular</Text>
                <View style={styles.inputWithIcon}>
                    <Ionicons name="call" size={22} color="gray" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        defaultValue={originalPhoneNumber}
                        onChange={(e) => handlePhoneNumberChange(e.nativeEvent.text)}
                        editable={isEditing}
                        keyboardType="numeric"
                        placeholder=""
                    />
                </View>

                <View style={styles.razapeContainer}>
                    <View style={styles.inputRow}>
                        <View style={{ flex: 1 }}>
                            <Text>Precio del paseo</Text>
                            <View style={styles.inputWithIcon}>
                                <Entypo name="credit" size={22} color="gray" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.inputWeightAge}
                                    onChangeText={text => setEditedPrice(text)}
                                    keyboardType="numeric"
                                    placeholder=""
                                    value={isEditing ? editedPrice : originalPrice}
                                    editable={isEditing}
                                />
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text>Tiempo de paseo</Text>
                            <View style={styles.inputWithIcon}>
                                <Entypo name="hour-glass" size={22} color="gray" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.inputWeightAge}
                                    onChangeText={text => setEditedWalkTime(text)}
                                    keyboardType="numeric"
                                    placeholder=""
                                    value={isEditing ? editedWalkTime : originalWalkTime}
                                    editable={isEditing}
                                />
                            </View>
                        </View>
                    </View>
                </View>


                <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                    <Text style={styles.editButton}>{isEditing ? 'Cancelar' : 'Editar mis datos personales'}</Text>
                </TouchableOpacity>

                {isEditing && (
                    <TouchableOpacity onPress={handleSaveChanges}>
                        <Text style={styles.saveButton}>Guardar cambios</Text>
                    </TouchableOpacity>
                )}




                <View style={styles.qualiListContainer}>
                    <Text>Calificaciones</Text>
                    <View style={styles.containerList}>
                        <FlatList
                            data={walkerQualifications}
                            renderItem={renderWalkerQualifications}
                            keyExtractor={item => item.idQualy}
                        />
                    </View>
                </View>
            </View>

        </SafeAreaView >
    );
};

export default WalkerProfile;
