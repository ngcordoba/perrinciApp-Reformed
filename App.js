import React from "react";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from './src/theme'
import { Provider } from "react-redux";
import store from "./src/store";


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}


