import { router } from "expo-router";
import React from "react";
import Account from "../../components/account";
import { SettingsButton } from "../../components/settingsComponents";
import { Text } from "../../components/themed";
import PageWrapper from "../../components/wrappers/pageWrapper";
import { useAppSelector } from "../../redux/hooks";

export default function Accounts(): React.JSX.Element {
  const accounts = useAppSelector((state) => state.accounts);

  return (
    <PageWrapper>
      {accounts.map((account) => (
        <Account account={account} key={account.id} />
      ))}
      <SettingsButton
        onPress={() => {
          router.push("/addAccountModal");
        }}
      >
        <Text>Add Account</Text>
      </SettingsButton>
    </PageWrapper>
  );
}
