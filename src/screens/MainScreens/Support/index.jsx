import { Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import styles from './style';

import { useNavigation } from '@react-navigation/native'
import ImgBackground from '../../../components/ImgBackground/Background';
import Button from "../../../components/Button";


const Support = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaContainer} >
      <ImgBackground />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          ¿Necesitas ayuda?
        </Text>


        <View style={styles.listContainer}>
          <Button
            style={styles.listText}
            text={"Ayuda"}
            onPress={() => navigation.navigate("Ayuda")}
          >

          </Button>

          <Button
            style={styles.listText}
            text={"Acerca de Perrinci"}
            onPress={() => navigation.navigate("AboutPetLink")} />

        </View>

        <View>
          <Button style={styles.textAbout}
            text={"Cerrar sesión"}></Button>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default Support
