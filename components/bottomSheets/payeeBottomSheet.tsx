import React from "react";
import { Text } from "../../components/themed";

interface Props {
  payeeId: string;
  setPayeeId: React.Dispatch<React.SetStateAction<string>>;
}

export default function PayeeBottomSheet({
  payeeId,
  setPayeeId,
}: Props): JSX.Element {
  return <Text>Payee</Text>;
}
