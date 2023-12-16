import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useThemeColor } from "./themed";

interface IProps {
  children: React.ReactNode;
}

export default function ModalWrapper({ children }: IProps): JSX.Element {
  const { grey1 } = useThemeColor();

  return (
    <View style={[styles.container, { backgroundColor: grey1 }]}>
      <StatusBar style="light" />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
