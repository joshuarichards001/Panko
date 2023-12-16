import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../components/themed";

export default function Budget(): React.JSX.Element {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.push("/addAccountModal");
        }}
      >
        <Text>account</Text>
      </TouchableOpacity>
    </View>
  );
}
