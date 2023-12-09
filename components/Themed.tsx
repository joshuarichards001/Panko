import { Text as DefaultText, TextInput as DefaultTextInput, View as DefaultView, useColorScheme } from "react-native";
import { Colors, ITheme } from "../constants/Colors";

type ThemeProps = {
  themeColor?: keyof ITheme;
};

export function useThemeColor() {
  const theme = useColorScheme() ?? "light";
  return Colors[theme];
}

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];

export function Text(props: TextProps) {
  const { style, themeColor, ...otherProps } = props;
  const { text } = useThemeColor();

  return <DefaultText style={[{ color: text, fontSize: 17, fontFamily: "InterRegular" }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, themeColor, ...otherProps } = props;
  const { text } = useThemeColor();

  return (
    <DefaultTextInput style={[{ color: text, fontSize: 17, fontFamily: "InterRegular" }, style]} {...otherProps} />
  );
}

export function View(props: ViewProps) {
  const { style, themeColor, ...otherProps } = props;
  const { background } = useThemeColor();

  return <DefaultView style={[{ backgroundColor: background }, style]} {...otherProps} />;
}
