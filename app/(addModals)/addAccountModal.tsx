import { useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import AddModalWrapper from "../../components/addModalWrapper";
import { Text, TextInput, useThemeColor } from "../../components/themed";
import { useAppSelector } from "../../redux/hooks";
import { closeAccount } from "../../redux/slices/accountSlice";

export default function AddAccountModal(): JSX.Element {
  const { accountId } = useGlobalSearchParams<{ accountId?: string }>();
  const account = useAppSelector((state) =>
    state.accounts.find((a) => a.id === accountId),
  );
  const { grey3, text } = useThemeColor();

  const [name, setName] = useState(account?.name ?? "");
  const [balance, setBalance] = useState(account?.balance.toString() ?? "");

  return (
    <AddModalWrapper
      object={account}
      objectName="Account"
      deleteAction={closeAccount}
    >
      <Text>Name</Text>
      <TextInput
        placeholderTextColor={grey3}
        value={name}
        onChangeText={(text: string) => {
          setName(text);
        }}
        placeholder="Checking..."
        maxLength={20}
      />
      <Text>Balance</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: balance === "" ? grey3 : text }}>$</Text>
        <TextInput
          placeholderTextColor={grey3}
          value={balance}
          onChangeText={(text: string) => {
            setBalance(text);
          }}
          placeholder="0.00"
          keyboardType="decimal-pad"
          maxLength={10}
        />
      </View>
    </AddModalWrapper>
  );
}
