import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
const HomeScreen = () => {
  return (
    <SafeAreaView
      style={[
        tw`bg-red-900 h-full`,
        {
          margin: 10,
        },
        styles.container,
      ]}
    >
      <Text
        style={[
          tw`text-red-500 pt-10`,
          styles.Text,
          {
            color: "blue",
          },
        ]}
      >
        Akshay Solanki
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontSize: 50,
  },
});
