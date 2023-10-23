import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from './src/theme'
import { Provider } from "react-redux";
import store from "./src/store";

import AuthNavigator from "./src/navigation/AuthNavigator";
import UserNavigator from "./src/navigation/UserNavigator";
import WalkerNavigator from "./src/navigation/WalkerNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="User" component={UserNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="DogWalker" component={WalkerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

