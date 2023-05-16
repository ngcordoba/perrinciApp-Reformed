import { Text, SafeAreaView, StatusBar, View } from 'react-native';
import React from 'react';
import styles from './style';
import ImgBackground from '../../../components/ImgBackground/Background';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native'

const TakeAWalk = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: 'white' }} >
      <ImgBackground />
      <View style={styles.container}>
        <Text style={styles.textHeader}>
          Buscá paseadores disponibles
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.mapView}>
          <Text>En esta seccion va el Mapa</Text>

        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("SeleccionarPaseador")}
            text={"Ver listado"}>
          </Button>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default TakeAWalk