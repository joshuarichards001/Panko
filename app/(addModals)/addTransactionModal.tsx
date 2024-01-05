import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { router, useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import AccountBottomSheet from "../../components/bottomSheets/accountBottomSheet";
import CategoryBottomSheet from "../../components/bottomSheets/categoryBottomSheet";
import PayeeBottomSheet from "../../components/bottomSheets/payeeBottomSheet";
import {
  SettingsAddAnotherButton,
  SettingsButton,
  SettingsContainer,
  SettingsDatePicker,
  SettingsDollarInput,
  SettingsGroupContainer,
  SettingsSegmentedControl,
  SettingsTitle,
  sharedStyles,
} from "../../components/settingsComponents";
import { Text, useThemeColor } from "../../components/themed";
import AddModalWrapper from "../../components/wrappers/addModalWrapper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from "../../redux/slices/transactionSlice";

export default function AddTransactionModal(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const budgetId = useAppSelector((state) => state.budgets[0].id);
  const { transactionId } = useGlobalSearchParams<{ transactionId?: string }>();
  const transaction = useAppSelector((state) =>
    state.transactions.find((t) => t.id === transactionId),
  );

  const { text, grey3 } = useThemeColor();

  const [type, setType] = useState<ITransactionType>(
    transaction?.type ?? "expense",
  );
  const [amount, setAmount] = useState(transaction?.amount?.toString() ?? "");
  const [payeeId, setPayeeId] = useState(transaction?.payeeId ?? "");
  const [accountId, setAccountId] = useState(transaction?.accountId ?? "");
  const [categoryId, setCategoryId] = useState(transaction?.categoryId ?? "");
  const [date, setDate] = useState(transaction?.date ?? new Date().getTime());

  const addTransactionToStore = (addAnother: boolean): boolean => {
    if (
      amount === "" ||
      payeeId === "" ||
      accountId === "" ||
      categoryId === ""
    ) {
      return false;
    }

    const newTransaction: ITransaction = {
      id: transaction !== undefined ? transaction.id : uuidv4(),
      budgetId,
      amount: parseFloat(amount),
      payeeId,
      categoryId,
      date,
      accountId,
      categoryGroupId: "",
      type,
    };

    if (transaction !== undefined) {
      dispatch(updateTransaction(newTransaction));
    } else {
      dispatch(addTransaction(newTransaction));
    }

    if (addAnother) {
      setType("expense");
      setAmount("");
      setPayeeId("");
      setAccountId("");
      setCategoryId("");
      setDate(new Date().getTime());
    } else {
      router.back();
    }

    return true;
  };

  return (
    <AddModalWrapper
      object={transaction}
      objectName="Transaction"
      deleteAction={deleteTransaction}
    >
      <BottomSheetModalProvider>
        <View>
          <SettingsSegmentedControl
            value={type}
            setValue={setType}
            options={["expense", "income", "transfer"]}
          />

          <SettingsGroupContainer>
            <SettingsContainer>
              <SettingsTitle>Amount</SettingsTitle>
              <View style={styles.balanceInput}>
                {type === "expense" && (
                  <Text style={{ color: amount === "" ? grey3 : text }}>-</Text>
                )}
                <SettingsDollarInput value={amount} setValue={setAmount} />
              </View>
            </SettingsContainer>
            <SettingsContainer>
              <SettingsTitle>Payee</SettingsTitle>
              <PayeeBottomSheet payeeId={payeeId} setPayeeId={setPayeeId} />
            </SettingsContainer>
            <SettingsContainer>
              <SettingsTitle>Account</SettingsTitle>
              <AccountBottomSheet
                accountId={accountId}
                setAccountId={setAccountId}
              />
            </SettingsContainer>
            <SettingsContainer>
              <SettingsTitle>Category</SettingsTitle>
              <CategoryBottomSheet
                categoryId={categoryId}
                setCategoryId={setCategoryId}
              />
            </SettingsContainer>
            <SettingsContainer isLast={true}>
              <SettingsTitle>Date</SettingsTitle>
              <SettingsDatePicker date={date} setDate={setDate} />
            </SettingsContainer>
          </SettingsGroupContainer>
        </View>

        <View style={sharedStyles.settingsAddButtonGroup}>
          <SettingsAddAnotherButton onPress={() => addTransactionToStore(true)}>
            Save and Add Another
          </SettingsAddAnotherButton>
          <SettingsButton onPress={() => addTransactionToStore(false)}>
            Add Category
          </SettingsButton>
        </View>
      </BottomSheetModalProvider>
    </AddModalWrapper>
  );
}

const styles = StyleSheet.create({
  balanceInput: {
    flexDirection: "row",
  },
});
