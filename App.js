import React from "react";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from './src/theme'
import { Provider } from "react-redux";
import store from "./src/store";
import AppNavigator from "./src/navigation/AppNavigator";


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>

  );
}


