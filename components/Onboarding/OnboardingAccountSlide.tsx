import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { onboardingStyles } from "../../constants/styles";
import { SettingsButton } from "../settingsComponents";
import { Text, TitleText } from "../themed";

interface Props {
  completeOnboarding: () => void;
  accounts: IAccount[];
  setAccounts: React.Dispatch<React.SetStateAction<IAccount[]>>;
  budgetId: string;
  handlePageTurn: (direction: "backward" | "forward") => void;
}

export default function OnboardingAccountSlide({
  completeOnboarding,
  accounts,
  setAccounts,
  budgetId,
  handlePageTurn,
}: Props): React.JSX.Element {
  // const [numAccountInputs, setNumAccountInputs] = useState(0);
  // const { grey4 } = useThemeColor();

  // const renderAccountInputs = () => {
  //   const inputs = [];
  //   for (let i = 0; i < numAccountInputs; i++) {
  //     inputs.push(
  //       <OnboardingAccountInput
  //         key={i}
  //         accounts={accounts}
  //         setAccounts={setAccounts}
  //         budgetId={budgetId}
  //         placeholder="e.g. Account..."
  //       />
  //     );
  //   }
  //   return inputs;
  // };

  return (
    <View style={onboardingStyles.container}>
      <View>
        <TouchableOpacity
          style={onboardingStyles.backButton}
          onPress={() => {
            handlePageTurn("backward");
          }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <View style={onboardingStyles.contentContainer}>
          <TitleText style={onboardingStyles.title}>
            List Your Accounts
          </TitleText>
          <ScrollView style={styles.accountsContainer}>
            {/* <OnboardingAccountInput
              accounts={accounts}
              setAccounts={setAccounts}
              budgetId={budgetId}
              placeholder="e.g. Checking..."
            />
            {renderAccountInputs()}
            <TouchableOpacity onPress={() => setNumAccountInputs(numAccountInputs + 1)}>
              <Text style={{ color: grey4 }}>+ Add Another</Text>
            </TouchableOpacity> */}
          </ScrollView>
        </View>
      </View>
      <SettingsButton onPress={completeOnboarding}>
        <Text>Start Budgeting!</Text>
      </SettingsButton>
    </View>
  );
}

const styles = StyleSheet.create({
  accountsContainer: {
    maxHeight: 285,
  },
});
