import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { textStyles } from "../../constants/textStyles";
import { Text, useThemeColor } from "../themed";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function ModalWrapper({ children, style }: IProps): JSX.Element {
  const { grey1, text } = useThemeColor();

  return (
    <View style={[style, { backgroundColor: grey1 }]}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Text style={[textStyles.m, { color: text }]}>Cancel</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>{children}</View>
      </TouchableWithoutFeedback>
    </View>
  );
}
