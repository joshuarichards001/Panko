import React from "react";
import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  useColorScheme,
} from "react-native";
import { colors, type ITheme } from "../constants/colors";
import { textStyles } from "../constants/textStyles";

export function useThemeColor(): ITheme {
  const theme = useColorScheme() ?? "light";
  return colors[theme];
}

export function Text(props: DefaultText["props"]): React.JSX.Element {
  const { style, ...otherProps } = props;
  const { text } = useThemeColor();

  return (
    <DefaultText
      style={[{ color: text }, textStyles.l, style]}
      {...otherProps}
    />
  );
}

export function TitleText(props: DefaultText["props"]): React.JSX.Element {
  const { style, ...otherProps } = props;
  const { text } = useThemeColor();

  return (
    <DefaultText
      style={[{ color: text }, textStyles.xxl, style]}
      {...otherProps}
    />
  );
}

export function TextInput(props: DefaultTextInput["props"]): React.JSX.Element {
  const { style, ...otherProps } = props;
  const { text } = useThemeColor();

  return (
    <DefaultTextInput
      style={[{ color: text }, textStyles.l, style]}
      {...otherProps}
    />
  );
}
