import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from './src/theme'


import AuthNavigator from "./src/navigation/AuthNavigator";
import UserNavigator from "./src/navigation/UserNavigator";
import WalkerNavigator from "./src/navigation/WalkerNavigator";
import PerrinciApp from "./src/screens/perrinciApp";

import { UserProvider } from "./src/context/UserContext"
import { WalkerProvider } from "./src/context/WalkerContext"

const Stack = createNativeStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Cambia este valor al número de milisegundos que desees para que se muestre la pantalla de carga
  }, []);


  return (
      <UserProvider>
        <WalkerProvider>
          <NavigationContainer theme={theme}>
            
              <Stack.Navigator>
                <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="User" component={UserNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="DogWalker" component={WalkerNavigator} options={{ headerShown: false }} />
              </Stack.Navigator>
          
          </NavigationContainer>
        </WalkerProvider>
      </UserProvider>
  );
}

