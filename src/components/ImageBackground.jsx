import React from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';

const ImgBackground = () => {
  return (
    <Image
      source={require('../../src/assets/images/backgroundPerrinci.jpg')}
      style={styles.imagenBackground}
    >
    </Image>
  );
}

const styles = StyleSheet.create({
  imagenBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

});


export default ImgBackground;
