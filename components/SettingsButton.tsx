import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { generalStyles } from "../constants/styles";
import { Text, useThemeColor } from "./themed";

export default function SettingsButton({
  onPress,
  text,
}: {
  onPress: () => void;
  text: string;
}): React.JSX.Element {
  const { primary } = useThemeColor();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        generalStyles.boxShadow,
        { backgroundColor: primary },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    borderRadius: 12,
    marginTop: 30,
  },
  buttonText: {
    color: "black",
  },
});
