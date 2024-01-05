import { Platform, StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";

export const onboardingStyles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    padding: 30,
    paddingBottom: 50,
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingTop: SCREEN_HEIGHT * 0.1,
  },
  title: {
    fontSize: 50,
    marginBottom: 50,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    zIndex: 1,
  },
});

export const tabStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export const generalStyles = StyleSheet.create({
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: "0px 3px 10px grey",
      },
    }),
  },
});
