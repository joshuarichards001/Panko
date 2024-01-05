import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SettingsButton } from "../../components/settingsComponents";
import { Text } from "../../components/themed";
import { tabStyles } from "../../constants/styles";
import { useAppSelector } from "../../redux/hooks";

export default function Accounts(): React.JSX.Element {
  const accounts = useAppSelector((state) => state.accounts);

  return (
    <View style={tabStyles.container}>
      {accounts.map((account) => (
        <TouchableOpacity
          key={account.id}
          onPress={() => {
            router.push({
              pathname: "/addAccountModal",
              params: { accountId: account.id },
            });
          }}
        >
          <Text key={account.id}>{account.name}</Text>
        </TouchableOpacity>
      ))}
      <SettingsButton
        onPress={() => {
          router.push("/addAccountModal");
        }}
      >
        <Text>Add Account</Text>
      </SettingsButton>
    </View>
  );
}
