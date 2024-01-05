import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AccountBottomSheet from "../../components/bottomSheets/accountBottomSheet";
import CategoryBottomSheet from "../../components/bottomSheets/categoryBottomSheet";
import {
  SettingsButton,
  SettingsContainer,
  SettingsGroupContainer,
  SettingsInput,
  SettingsTitle,
} from "../../components/settingsComponents";
import AddModalWrapper from "../../components/wrappers/addModalWrapper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addPayee,
  deletePayee,
  updatePayee,
} from "../../redux/slices/payeeSlice";

export default function AddPayeeModal(): JSX.Element {
  const budgetId = useAppSelector((state) => state.budgets[0].id);
  const { payeeId } = useGlobalSearchParams<{ payeeId?: string }>();
  const payee = useAppSelector((state) =>
    state.payees.find((p) => p.id === payeeId),
  );
  const dispatch = useAppDispatch();

  const [name, setName] = useState(payee?.name ?? "");
  const [categoryId, setCategoryId] = useState(payee?.categoryId ?? "");
  const [accountId, setAccountId] = useState(payee?.accountId ?? "");

  const addPayeeToStore = (): boolean => {
    if (name === "") {
      return false;
    }

    const newPayee: IPayee = {
      id: payee !== undefined ? payee.id : uuidv4(),
      budgetId,
      name,
      categoryId,
      accountId,
    };

    if (payee !== undefined) {
      dispatch(updatePayee(newPayee));
    } else {
      dispatch(addPayee(newPayee));
    }

    return true;
  };

  return (
    <AddModalWrapper
      object={payee}
      objectName="Payee"
      deleteAction={deletePayee}
    >
      <BottomSheetModalProvider>
        <SettingsGroupContainer>
          <SettingsContainer>
            <SettingsTitle>Name</SettingsTitle>
            <SettingsInput
              value={name}
              setValue={setName}
              placeholder="Supermarket..."
              maxLength={20}
            />
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
        </SettingsGroupContainer>

        <SettingsButton onPress={() => addPayeeToStore()}>
          Add Payee
        </SettingsButton>
      </BottomSheetModalProvider>
    </AddModalWrapper>
  );
}
