import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { fontSizes, fontWeights } from "../theme/fonts";

const PerrinciApp = () => {
  const navigation = useNavigation();
  const [rotateValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const rotationAnimation = Animated.timing(
      rotateValue,
      {
        toValue: 1,
        duration: 1500, // Duración de la animación en milisegundos
        easing: Easing.linear,
        useNativeDriver: true
      }
    );

    Animated.loop(rotationAnimation).start();
  }, []);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['10deg', '360deg']
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/perrinciLogo.png')}
        style={[styles.photoContainer, { transform: [{ rotate }] }]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}> ¡Bienvenido a Perrinci App! </Text>
      </View>
        <Text style={styles.text}> ¡Conectá con la felicidad de tu mascota en solo unos clics! </Text>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    margin: "4%",
  },

  title: {
    color: colors.text.secondary,
    fontSize: fontSizes.title,
    fontWeight: fontWeights.bold,
    textAlign: 'center',

  },

  photoContainer: {
    alignItems: 'center',
    height: '25%',
    width: '40%',
    borderRadius: 20,
    marginBottom: "5%",
    margin: "10%",
  },
});

export default PerrinciApp;
