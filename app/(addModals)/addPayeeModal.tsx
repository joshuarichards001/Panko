import { useGlobalSearchParams } from "expo-router";
import React from "react";
import AddModalWrapper from "../../components/addModalWrapper";
import { Text } from "../../components/themed";
import { useAppSelector } from "../../redux/hooks";
import { deletePayee } from "../../redux/slices/payeeSlice";

export default function AddPayeeModal(): JSX.Element {
  const { payeeId } = useGlobalSearchParams<{ payeeId?: string }>();
  const payee = useAppSelector((state) =>
    state.payees.find((p) => p.id === payeeId),
  );

  return (
    <AddModalWrapper
      object={payee}
      objectName="Payee"
      deleteAction={deletePayee}
    >
      <Text>payee</Text>
    </AddModalWrapper>
  );
}
