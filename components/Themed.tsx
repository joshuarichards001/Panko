import React from "react";
import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  useColorScheme,
} from "react-native";
import { colors, type ITheme } from "../constants/colors";

interface ThemeProps {
  themeColor?: keyof ITheme;
}

export function useThemeColor(): ITheme {
  const theme = useColorScheme() ?? "light";
  return colors[theme];
}

export type TextProps = ThemeProps & DefaultText["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];

export function Text(props: TextProps): React.JSX.Element {
  const { style, themeColor, ...otherProps } = props;
  const { text } = useThemeColor();

  return (
    <DefaultText
      style={[{ color: text, fontSize: 17, fontFamily: "InterRegular" }, style]}
      {...otherProps}
    />
  );
}

export function TitleText(props: TextProps): React.JSX.Element {
  const { style, themeColor, ...otherProps } = props;
  const { text } = useThemeColor();

  return (
    <DefaultText
      style={[{ color: text, fontSize: 17, fontFamily: "InterBold" }, style]}
      {...otherProps}
    />
  );
}

export function TextInput(props: TextInputProps): React.JSX.Element {
  const { style, themeColor, ...otherProps } = props;
  const { text } = useThemeColor();

  return (
    <DefaultTextInput
      style={[{ color: text, fontSize: 17, fontFamily: "InterRegular" }, style]}
      {...otherProps}
    />
  );
}
