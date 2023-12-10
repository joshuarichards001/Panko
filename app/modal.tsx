import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import { Text, View } from "../components/themed";

export default function ModalScreen(): React.JSX.Element {
  return (
    <View>
      <Text>Modal</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
