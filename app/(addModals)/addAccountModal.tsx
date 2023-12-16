import { useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import AddModalWrapper from "../../components/addModalWrapper";
import {
  SettingButton,
  SettingContainer,
  SettingDollarInput,
  SettingGroupContainer,
  SettingInput,
  SettingTitle,
} from "../../components/settingsComponents";
import { useAppSelector } from "../../redux/hooks";
import { closeAccount } from "../../redux/slices/accountSlice";

export default function AddAccountModal(): JSX.Element {
  const { accountId } = useGlobalSearchParams<{ accountId?: string }>();
  const account = useAppSelector((state) =>
    state.accounts.find((a) => a.id === accountId),
  );

  const [name, setName] = useState(account?.name ?? "");
  const [balance, setBalance] = useState(account?.balance.toString() ?? "");

  return (
    <AddModalWrapper
      object={account}
      objectName="Account"
      deleteAction={closeAccount}
    >
      <SettingGroupContainer>
        <SettingContainer>
          <SettingTitle>Name</SettingTitle>
          <SettingInput
            value={name}
            setValue={setName}
            placeholder="Checking..."
            maxLength={20}
          />
        </SettingContainer>
        <SettingContainer>
          <SettingTitle>Balance</SettingTitle>
          <SettingDollarInput value={balance} setValue={setBalance} />
        </SettingContainer>
      </SettingGroupContainer>
      <SettingButton>Add Account</SettingButton>
    </AddModalWrapper>
  );
}
