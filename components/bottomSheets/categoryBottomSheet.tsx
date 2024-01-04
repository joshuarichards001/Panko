import { type BottomSheetModal } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../components/themed";
import { useAppSelector } from "../../redux/hooks";
import {
  SettingsAddAnotherButton,
  SettingsContainer,
  SettingsGroupContainer,
} from "../settingsComponents";
import BottomSheetWrapper from "../wrappers/bottomSheetWrapper";

interface Props {
  categoryId: string;
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryBottomSheet({
  categoryId,
  setCategoryId,
}: Props): JSX.Element {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const categories = useAppSelector((state) => state.categories);
  const category = categories.find((c) => c.id === categoryId);

  return (
    <BottomSheetWrapper
      buttonText={category?.name}
      bottomSheetModalRef={bottomSheetModalRef}
      buttonPlaceholder="Groceries..."
    >
      <SettingsAddAnotherButton
        onPress={() => {
          router.push("/addCategoryModal");
        }}
      >
        + Create New
      </SettingsAddAnotherButton>
      <SettingsGroupContainer>
        {categories.map((c, i) => (
          <SettingsContainer key={c.id} isLast={categories.length - 1 === i}>
            <TouchableOpacity
              onPress={() => {
                setCategoryId(c.id);
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text>{c.name}</Text>
            </TouchableOpacity>
          </SettingsContainer>
        ))}
      </SettingsGroupContainer>
    </BottomSheetWrapper>
  );
}
