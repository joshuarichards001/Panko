import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { Text } from "../../components/themed";
import AddModalWrapper from "../../components/wrappers/addModalWrapper";
import { useAppSelector } from "../../redux/hooks";
import { deleteTransaction } from "../../redux/slices/transactionSlice";

export default function AddTransactionModal(): React.JSX.Element {
  const { transactionId } = useGlobalSearchParams<{ transactionId?: string }>();
  const transaction = useAppSelector((state) =>
    state.transactions.find((t) => t.id === transactionId),
  );

  return (
    <AddModalWrapper
      object={transaction}
      objectName="Transaction"
      deleteAction={deleteTransaction}
    >
      <Text>transaction</Text>
    </AddModalWrapper>
  );
}
