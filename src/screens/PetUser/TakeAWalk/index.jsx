import { Text, SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors';
import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../../../components/User_LocationMap';
import { fontSizes } from '../../../theme/fonts';

const TakeAWalk = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImgBackground />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Buscá paseadores disponibles</Text>
      </View>

      <View style={{ height: "70%" }}>
        <MapScreen />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('SeleccionarPaseador')}
          text="Ver listado de paseadores"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
  },
  textHeader: {
    color: colors.brand.primary,
    fontSize: fontSizes.text,
    margin: 40,
  },

  buttonContainer: {
    alignSelf: 'center',
  },
});

export default TakeAWalk;