import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Account from "../../components/account";
import { SettingsButton } from "../../components/settingsComponents";
import { useThemeColor } from "../../components/themed";
import PageWrapper from "../../components/wrappers/pageWrapper";
import { useAppSelector } from "../../redux/hooks";

export default function Accounts(): React.JSX.Element {
  const accounts = useAppSelector((state) => state.accounts);

  const { background } = useThemeColor();

  return (
    <PageWrapper>
      <View style={[styles.accountsContainer, { backgroundColor: background }]}>
        {accounts.map((account, i) => (
          <Account
            account={account}
            key={account.id}
            isLast={i === accounts.length - 1}
          />
        ))}
      </View>
      <SettingsButton
        onPress={() => {
          router.push("/addAccountModal");
        }}
      >
        Add Account
      </SettingsButton>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  accountsContainer: {
    borderRadius: 14,
    marginBottom: 16,
  },
});
