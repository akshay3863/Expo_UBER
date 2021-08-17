import React from "react";
import { StyleSheet, Image, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
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
    fontSize: 30,
  },
});
