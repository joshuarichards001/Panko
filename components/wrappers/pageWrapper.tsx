import React from "react";
import { StyleSheet, View } from "react-native";
import { useThemeColor } from "../themed";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { grey1 } = useThemeColor();

  return (
    <View style={[styles.container, { backgroundColor: grey1 }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: "100%",
  },
});
