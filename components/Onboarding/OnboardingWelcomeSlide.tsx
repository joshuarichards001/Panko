import React from "react";
import { onboardingStyles } from "../../constants/styles";
import SettingsButton from "../settingsButton";
import { Text, TitleText, View } from "../themed";

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
        text="Get Started!"
        onPress={() => {
          handlePageTurn("forward");
        }}
      />
    </View>
  );
}
