import { router, useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
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
import { Text, useThemeColor } from "../../components/themed";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addAccount,
  closeAccount,
  updateAccount,
} from "../../redux/slices/accountSlice";

export default function AddAccountModal(): JSX.Element {
  const budgetId = useAppSelector((state) => state.budgets[0].id);
  const { accountId } = useGlobalSearchParams<{ accountId?: string }>();
  const account = useAppSelector((state) =>
    state.accounts.find((a) => a.id === accountId),
  );
  const { text, grey3 } = useThemeColor();
  const dispatch = useAppDispatch();

  const [type, setType] = useState<IAccountType>(account?.type ?? "checking");
  const [name, setName] = useState(account?.name ?? "");
  const [balance, setBalance] = useState(account?.balance.toString() ?? "");

  const accountNamePlaceholder = (): string => {
    switch (type) {
      case "checking":
        return "Checking...";
      case "saving":
        return "Savings...";
      case "debt":
        return "Mortgage...";
    }
  };

  const addAccountToStore = (addAnother: boolean): boolean => {
    if (name === "" || balance === "") {
      return false;
    }

    const newAccount: IAccount = {
      id: account !== undefined ? account.id : uuidv4(),
      budgetId,
      name,
      type,
      balance: parseFloat(balance),
      isClosed: false,
    };

    dispatch(
      account !== undefined
        ? updateAccount(newAccount)
        : addAccount(newAccount),
    );

    if (addAnother) {
      setType("checking");
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
          options={["checking", "saving", "debt"]}
        />

        <SettingsGroupContainer>
          <SettingsContainer>
            <SettingsTitle>Name</SettingsTitle>
            <SettingsInput
              value={name}
              setValue={setName}
              placeholder={accountNamePlaceholder()}
              maxLength={20}
            />
          </SettingsContainer>
          <SettingsContainer isLast={true}>
            <SettingsTitle>Balance</SettingsTitle>
            <View style={styles.balanceInput}>
              {type === "debt" && (
                <Text style={{ color: balance === "" ? grey3 : text }}>-</Text>
              )}
              <SettingsDollarInput value={balance} setValue={setBalance} />
            </View>
          </SettingsContainer>
        </SettingsGroupContainer>
      </View>

      <View style={sharedStyles.settingsAddButtonGroup}>
        <SettingsAddAnotherButton onPress={() => addAccountToStore(true)}>
          Save and Add Another
        </SettingsAddAnotherButton>
        <SettingsButton onPress={() => addAccountToStore(false)}>
          Add Account
        </SettingsButton>
      </View>
    </AddModalWrapper>
  );
}

const styles = StyleSheet.create({
  balanceInput: {
    flexDirection: "row",
  },
});
