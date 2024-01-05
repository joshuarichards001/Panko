import { type BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { Text } from "../../components/themed";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addPayee } from "../../redux/slices/payeeSlice";
import {
  SettingsAddAnotherButton,
  SettingsContainer,
  SettingsGroupContainer,
} from "../settingsComponents";
import BottomSheetWrapper from "../wrappers/bottomSheetWrapper";

interface Props {
  payeeId: string;
  setPayeeId: React.Dispatch<React.SetStateAction<string>>;
}

export default function PayeeBottomSheet({
  payeeId,
  setPayeeId,
}: Props): JSX.Element {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const dispatch = useAppDispatch();

  const budgetId = useAppSelector((state) => state.budgets[0].id);
  const payees = useAppSelector((state) => state.payees);
  const payee = payees.find((p) => p.id === payeeId);

  const handleNewPayee = (): void => {
    Alert.prompt(
      "Add Payee",
      "Enter the name of the payee you would like to create.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: (payeeName) => {
            payeeName !== undefined && addNewPayee(payeeName);
          },
        },
      ],
    );
  };

  const addNewPayee = (payeeName: string): boolean => {
    if (payeeName === "") {
      return false;
    }

    const id = uuidv4();

    const newPayee: IPayee = {
      name: payeeName,
      budgetId,
      id,
    };

    dispatch(addPayee(newPayee));
    setPayeeId(id);
    bottomSheetModalRef.current?.dismiss();
    return true;
  };

  return (
    <BottomSheetWrapper
      buttonText={payee?.name}
      bottomSheetModalRef={bottomSheetModalRef}
      buttonPlaceholder="Super Market..."
    >
      <SettingsAddAnotherButton onPress={handleNewPayee}>
        + Create New
      </SettingsAddAnotherButton>
      <SettingsGroupContainer>
        {payees.map((p, i) => (
          <SettingsContainer key={p.id} isLast={payees.length - 1 === i}>
            <TouchableOpacity
              onPress={() => {
                setPayeeId(p.id);
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text>{p.name}</Text>
            </TouchableOpacity>
          </SettingsContainer>
        ))}
      </SettingsGroupContainer>
    </BottomSheetWrapper>
  );
}
