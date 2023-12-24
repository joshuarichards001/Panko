import React from "react";
import { Text } from "../../components/themed";

interface Props {
  accountId: string;
  setAccountId: React.Dispatch<React.SetStateAction<string>>;
}

export default function AccountBottomSheet({
  accountId,
  setAccountId,
}: Props): JSX.Element {
  return <Text>Account</Text>;
}
