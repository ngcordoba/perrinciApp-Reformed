import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Button from '../../../components/ButtonRegular';
import ImgBackground from '../../../components/ImageBackground';

import { useUser } from '../../../context/UserContext';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Usa el hook useUser para obtener los datos del usuario
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <ImgBackground />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`Hola ${user ? user.nombre : 'Usuario'}`}</Text>
      </View>

      <Button onPress={() => navigation.navigate('SolicitarPaseo')} text={'Quiero un paseo'} />

      {/* Condiciona este botón según si hay un paseo disponible o no */}
      <Button onPress={() => navigation.navigate('PaseoEnCurso')} text={'Ver Paseo'} />
    </View>
  );
};

export default HomeScreen;
