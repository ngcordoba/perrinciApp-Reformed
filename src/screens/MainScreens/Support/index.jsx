import { Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import ImgBackground from '../../../components/ImgBackground/Background';
import Button from "../../../components/Button";
import styles from './style';



const Support = () => {
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
            text={"Ayuda"}></Button>
          <Button style={styles.listText}
            text={"Acerca de Perrinci"}></Button>

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
