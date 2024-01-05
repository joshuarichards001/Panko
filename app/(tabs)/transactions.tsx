import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SettingsButton } from "../../components/settingsComponents";
import { Text } from "../../components/themed";
import { tabStyles } from "../../constants/styles";
import { useAppSelector } from "../../redux/hooks";

export default function Transactions(): React.JSX.Element {
  const transactions = useAppSelector((state) => state.transactions);
  return (
    <View style={tabStyles.container}>
      {transactions.map((transaction) => (
        <TouchableOpacity
          key={transaction.id}
          onPress={() => {
            router.push({
              pathname: "/addTransactionModal",
              params: { transactionId: transaction.id },
            });
          }}
        >
          <Text key={transaction.id}>{transaction.categoryId}</Text>
        </TouchableOpacity>
      ))}
      <SettingsButton
        onPress={() => {
          router.push("/addTransactionModal");
        }}
      >
        <Text>Add Transaction</Text>
      </SettingsButton>
    </View>
  );
}
