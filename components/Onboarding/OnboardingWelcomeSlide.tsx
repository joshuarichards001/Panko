import React from "react";
import { View } from "react-native";
import { onboardingStyles } from "../../constants/styles";
import { SettingsButton } from "../settingsComponents";
import { Text, TitleText } from "../themed";

interface Props {
  handlePageTurn: (direction: "backward" | "forward") => void;
}

export default function OnboardingWelcomeSlide({
  handlePageTurn,
}: Props): React.JSX.Element {
  return (
    <View style={onboardingStyles.container}>
      <View style={onboardingStyles.contentContainer}>
        <TitleText style={onboardingStyles.title}>Welcome To Panko!</TitleText>
        <Text>
          Your financial freedom is just around the corner and we&apos;re here
          to help!
        </Text>
      </View>
      <SettingsButton
        onPress={() => {
          handlePageTurn("forward");
        }}
      >
        Get Started!
      </SettingsButton>
    </View>
  );
}
