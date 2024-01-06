import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, useThemeColor } from "../components/themed";

interface Props {
  account: IAccount;
  isLast: boolean;
}

export default function Account({ account, isLast }: Props): React.JSX.Element {
  const { grey2, error2, success2 } = useThemeColor();

  const textColor = account.type === "debt" ? error2 : success2;

  return (
    <TouchableOpacity
      key={account.id}
      style={[
        styles.container,
        { borderBottomWidth: isLast ? 0 : 1, borderBottomColor: grey2 },
      ]}
      onPress={() => {
        router.push({
          pathname: "/addAccountModal",
          params: { accountId: account.id },
        });
      }}
    >
      <Text>{account.name}</Text>
      <Text style={{ color: textColor }}>
        {account.type === "debt" && "-"}${account.balance}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
