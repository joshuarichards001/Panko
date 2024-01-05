import React from "react";
import { View } from "react-native";
import { Text } from "../../components/themed";
import { tabStyles } from "../../constants/styles";

export default function Settings(): React.JSX.Element {
  return (
    <View style={tabStyles.container}>
      <Text>settings</Text>
    </View>
  );
}
