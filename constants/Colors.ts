const colorPalette = {
  black: "#000000",
  white: "#ffffff",
  neutral900: "#1a1a1a",
  neutral800: "#333333",
  neutral700: "#4d4d4d",
  neutral600: "#666666",
  neutral500: "#808080",
  neutral400: "#999999",
  neutral300: "#b2b2b2",
  neutral200: "#cccccc",
  neutral100: "#e5e5e5",
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

export interface ITheme {
  text: string;
  background: string;
  tabIconDefault: string;
  tabIconSelected: string;
  primary: string;
  secondary: string;
  error: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
}

export const colors: {
  light: ITheme;
  dark: ITheme;
} = {
  light: {
    text: colorPalette.black,
    background: colorPalette.white,
    tabIconDefault: colorPalette.neutral400,
    tabIconSelected: colorPalette.primary500,
    primary: colorPalette.primary500,
    secondary: colorPalette.secondary500,
    error: colorPalette.red500,
    grey1: colorPalette.neutral100,
    grey2: colorPalette.neutral200,
    grey3: colorPalette.neutral300,
    grey4: colorPalette.neutral400,
    grey5: colorPalette.neutral500,
  },
  dark: {
    text: colorPalette.white,
    background: colorPalette.black,
    tabIconDefault: colorPalette.neutral400,
    tabIconSelected: colorPalette.white,
    primary: colorPalette.primary500,
    secondary: colorPalette.secondary500,
    error: colorPalette.red500,
    grey1: colorPalette.neutral900,
    grey2: colorPalette.neutral800,
    grey3: colorPalette.neutral700,
    grey4: colorPalette.neutral600,
    grey5: colorPalette.neutral500,
  },
};
