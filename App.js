import React from "react";
import Navigation from "./src/components/Navigator/Navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from './src/theme'
import { Provider } from "react-redux";
import store from "./src/store";


export default function App() {
  return (
    <Provider store={store}>
      <Navigation theme={theme} />
    </Provider>
  );
}


