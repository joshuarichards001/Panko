const baseColorPalette = {
  black: "#000000",
  neutral800: "#1a1a1a",
  neutral700: "#333333",
  neutral600: "#4d4d4d",
  neutral500: "#666666",
  neutral400: "#808080",
  neutral300: "#b3b3b3",
  neutral200: "#cccccc",
  neutral100: "#e6e6e6",
  white: "#ffffff",
  primary900: "#00232f",
  primary800: "#00465e",
  primary700: "#006a8d",
  primary600: "#008dbc",
  primary500: "#00b0eb",
  primary400: "#33c0ef",
  primary300: "#66d0f3",
  primary200: "#99dff7",
  primary100: "#cceffb",
  secondary900: "#331d00",
  secondary800: "#663a00",
  secondary700: "#995700",
  secondary600: "#cc7400",
  secondary500: "#ff9100",
  secondary400: "#ffa733",
  secondary300: "#ffbd66",
  secondary200: "#ffd399",
  secondary100: "#ffe9cc",
  green900: "#002414",
  green800: "#004827",
  green700: "#006b3b",
  green600: "#008f4e",
  green500: "#00b362",
  green400: "#33c281",
  green300: "#66d1a1",
  green200: "#99e1c0",
  green100: "#ccf0e0",
  red900: "#2c0005",
  red800: "#58000a",
  red700: "#830010",
  red600: "#af0015",
  red500: "#db001a",
  red400: "#e23348",
  red300: "#e96676",
  red200: "#f199a3",
  red100: "#f8ccd1",
};

export type ITheme = {
  text: string;
  background: string;
  tabIconDefault: string;
  tabIconSelected: string;
  primary: string;
  secondary: string;
  error: string;
};

export const Colors: {
  light: ITheme;
  dark: ITheme;
} = {
  light: {
    text: baseColorPalette.black,
    background: baseColorPalette.white,
    tabIconDefault: baseColorPalette.neutral300,
    tabIconSelected: baseColorPalette.primary500,
    primary: baseColorPalette.primary500,
    secondary: baseColorPalette.secondary500,
    error: baseColorPalette.red500,
  },
  dark: {
    text: baseColorPalette.white,
    background: baseColorPalette.black,
    tabIconDefault: baseColorPalette.neutral400,
    tabIconSelected: baseColorPalette.white,
    primary: baseColorPalette.primary500,
    secondary: baseColorPalette.secondary500,
    error: baseColorPalette.red500,
  },
};
