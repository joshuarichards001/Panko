import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SettingsButton } from "../../components/settingsComponents";
import { Text } from "../../components/themed";
import PageWrapper from "../../components/wrappers/pageWrapper";
import { useAppSelector } from "../../redux/hooks";

export default function Transactions(): React.JSX.Element {
  const transactions = useAppSelector((state) => state.transactions);
  return (
    <PageWrapper>
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
        Add Transaction
      </SettingsButton>
    </PageWrapper>
  );
}
