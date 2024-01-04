import { type BottomSheetModal } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { useAppSelector } from "../../redux/hooks";
import {
  SettingsAddAnotherButton,
  SettingsContainer,
  SettingsGroupContainer,
} from "../settingsComponents";
import { Text } from "../themed";
import BottomSheetWrapper from "../wrappers/bottomSheetWrapper";

interface Props {
  accountId: string;
  setAccountId: React.Dispatch<React.SetStateAction<string>>;
}

export default function AccountBottomSheet({
  accountId,
  setAccountId,
}: Props): JSX.Element {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const accounts = useAppSelector((state) => state.accounts);
  const account = accounts.find((a) => a.id === accountId);

  return (
    <BottomSheetWrapper
      buttonText={account?.name}
      bottomSheetModalRef={bottomSheetModalRef}
      buttonPlaceholder="Checking..."
    >
      <SettingsAddAnotherButton
        onPress={() => {
          router.push("/addAccountModal");
        }}
      >
        + Create New
      </SettingsAddAnotherButton>
      <SettingsGroupContainer>
        {accounts.map((a, i) => (
          <SettingsContainer key={a.id} isLast={accounts.length - 1 === i}>
            <TouchableOpacity
              onPress={() => {
                setAccountId(a.id);
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text>{a.name}</Text>
            </TouchableOpacity>
          </SettingsContainer>
        ))}
      </SettingsGroupContainer>
    </BottomSheetWrapper>
  );
}
