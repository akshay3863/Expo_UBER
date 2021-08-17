import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { Store } from "./Store";
import HomeScreen from "./Screen/HomeScreen";
export default function App() {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  );
}


