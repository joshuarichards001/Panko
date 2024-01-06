import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../components/themed";

interface Props {
  account: IAccount;
}

export default function Account({ account }: Props): React.JSX.Element {
  return (
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
  );
}
