import { Text, SafeAreaView, View, StatusBar } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native'
import ImgBackground from '../components/ImgBackground/Background';
import Button from "../components/Button";

import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { fontSizes } from "../theme/fonts";


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

export default Support;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.brand.white,
  },

  textContainer: {
    alignItems: "center",

  },

  text: {
    color: colors.brand.primary,
    fontSize: fontSizes.title,
    margin: 40,
  },

  listContainer: {
    height: '60%',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  listText: {
    color: colors.brand.primary,
    fontSize: fontSizes.text,
    padding: "4%"
  },


});

