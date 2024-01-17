import React, { useState } from 'react';
import { Text, SafeAreaView, StatusBar, View, TextInput, Button, Alert, Image } from 'react-native';
import styles from './style';
import ImgBackground from '../../../components/ImageBackground';
import ButtonPr from '../../../components/ButtonRegular';
import { useNavigation } from '@react-navigation/native';

// Importa los contextos necesarios
import { useUser } from '../../../context/UserContext';
import { useWalker } from '../../../context/WalkerContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Obteniendo los contextos de cada usuario
  const { setUser } = useUser();
  const { setWalker } = useWalker();

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Por favor complete los campos vacíos');
      return;
    }

    try {
      // Simulación de inicio de sesión exitoso con datos simulados
      const userData = {
        nombre: 'eze',
        apellido: 'Cordoba',
        celular: "1123942295",
        email: 'prueba@example.com',
        tipo: "usuario",
        Dog: {
          dogName: "Bernarda",
          dogAge: "1",
          dogWeight: "4kg",
          dogRaza: "Salchicha"
        }
      };

      if (userData.tipo === 'usuario') {

        setUser(userData);
        navigation.navigate('User');
      } else if (email === 'paseador') {
        setWalker(userData);
        navigation.navigate('DogWalker');
      }
    } catch (error) {
      console.error('Error al realizar el inicio de sesión:', error);
    }
  };

  /*
  try {
    // Realizo la solicitud al backend para validar el inicio de sesión 
    const response = await fetch('URL_DEL_BACKEND', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
 
    if (!response.ok) {
      // Manejo los casos en los que la autenticación falla
      Alert.alert('Alguno de los datos no es correcto. Verifica tus credenciales.');
      return;
    }
 
    const userData = await response.json();
 
    // Almacena los datos del usuario en el contexto correspondiente
    if (userData.tipo === 'usuario') {
      setUser(userData);
      navigation.navigate('User');
    } else if (userData.tipo === 'paseador') {
      setWalker(userData);
      navigation.navigate('DogWalker');
    } else {
      // Manejar otros tipos de usuarios si es necesario
    }
  } catch (error) {
    console.error('Error al realizar el inicio de sesión:', error);
  }
};
 
 
*/

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center' }}>
      <ImgBackground />
      <Image source={require('../../../assets/images/perrinciLogo.png')} style={styles.photoContainer} />

      <View style={styles.inputContainer}>
        <Text>Correo electrónico</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder='Ingresar correo electrónico'
        />

        <Text>Contraseña</Text>
        <TextInput
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          placeholder='Ingresar contraseña'
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <ButtonPr onPress={handleSubmit} text={'Iniciar sesión'} />
          <ButtonPr onPress={() => navigation.navigate('RegistrarseComo')} text={'Registrarse'} />
          <Button onPress={() => navigation.navigate('ResetearContrasena')} title='¿Olvidaste tu contraseña?' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;