import { Platform, StyleSheet } from "react-native";
import { height, width } from "./constants";

export const onboardingStyles = StyleSheet.create({
  container: {
    width,
    padding: 30,
    paddingBottom: 50,
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingTop: height * 0.1,
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
