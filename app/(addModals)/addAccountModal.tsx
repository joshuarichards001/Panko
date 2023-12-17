import { router, useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import AddModalWrapper from "../../components/addModalWrapper";
import {
  SettingsAddAnotherButton,
  SettingsButton,
  SettingsContainer,
  SettingsDollarInput,
  SettingsGroupContainer,
  SettingsInput,
  SettingsSegmentedControl,
  SettingsTitle,
  sharedStyles,
} from "../../components/settingsComponents";
import { useAppSelector } from "../../redux/hooks";
import { closeAccount } from "../../redux/slices/accountSlice";

export default function AddAccountModal(): JSX.Element {
  const { accountId } = useGlobalSearchParams<{ accountId?: string }>();
  const account = useAppSelector((state) =>
    state.accounts.find((a) => a.id === accountId),
  );

  const [type, setType] = useState<string>(account?.type ?? "cash");
  const [name, setName] = useState(account?.name ?? "");
  const [balance, setBalance] = useState(account?.balance.toString() ?? "");

  const addAccount = (addAnother: boolean): boolean => {
    if (name === "" || balance === "") {
      return false;
    }

    if (addAnother) {
      setType("cash");
      setName("");
      setBalance("");
    } else {
      router.back();
    }

    return true;
  };

  return (
    <AddModalWrapper
      object={account}
      objectName="Account"
      deleteAction={closeAccount}
    >
      <View>
        <SettingsSegmentedControl
          value={type}
          setValue={setType}
          options={["cash", "debt"]}
        />

        <SettingsGroupContainer>
          <SettingsContainer>
            <SettingsTitle>Name</SettingsTitle>
            <SettingsInput
              value={name}
              setValue={setName}
              placeholder="Checking..."
              maxLength={20}
            />
          </SettingsContainer>
          <SettingsContainer isLast={true}>
            <SettingsTitle>Balance</SettingsTitle>
            <SettingsDollarInput value={balance} setValue={setBalance} />
          </SettingsContainer>
        </SettingsGroupContainer>
      </View>

      <View style={sharedStyles.settingsAddButtonGroup}>
        <SettingsAddAnotherButton onPress={() => addAccount(true)}>
          Save and Add Another
        </SettingsAddAnotherButton>
        <SettingsButton onPress={() => addAccount(false)}>
          Add Account
        </SettingsButton>
      </View>
    </AddModalWrapper>
  );
}
