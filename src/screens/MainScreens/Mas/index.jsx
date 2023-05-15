import { Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import ImgBackground, { BackgroundImage } from '../../../constants/Background/Background'


const SettingsScreen = () => {
  return (

    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: 'white' }} >
      <ImgBackground />
      <Text>Listado con botones e iconos</Text>
      <Text>Mis paseos</Text>
      <Text>Mis metodos de pago</Text>
      <Text>Boton cerrar sesion </Text>
    </SafeAreaView>

  )
}

export default SettingsScreen
