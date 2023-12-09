export type ITheme = {
  text: string;
  background: string;
  tabIconDefault: string;
  tabIconSelected: string;
  shadeGrey: string;
  grey: string;
  accentGrey: string;
  accent: string;
  error: string;
};

export const Colors: {
  light: ITheme;
  dark: ITheme;
} = {
  light: {
    text: "#000",
    background: "#fff",
    tabIconDefault: "#999",
    tabIconSelected: "#2f95dc",
    shadeGrey: "#a9a9a9",
    grey: "#ccc",
    accentGrey: "#efefef",
    accent: "#6347EB",
    error: "#ff0000",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tabIconDefault: "#999",
    tabIconSelected: "#fff",
    shadeGrey: "#a9a9a9",
    grey: "#777",
    accentGrey: "#2c2c2e",
    accent: "#6347EB",
    error: "#ff0000",
  },
};
