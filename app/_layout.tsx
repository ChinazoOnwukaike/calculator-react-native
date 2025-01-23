import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import globalStyles from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default RootLayout;
