import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { router, useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import AddModalWrapper from "../../components/addModalWrapper";
import CategoryGroupBottomSheet from "../../components/bottomSheets/categoryGroupBottomSheet";
import {
  SettingsAddAnotherButton,
  SettingsButton,
  SettingsContainer,
  SettingsDollarInput,
  SettingsGroupContainer,
  SettingsInput,
  SettingsTitle,
  sharedStyles,
} from "../../components/settingsComponents";
import { useAppSelector } from "../../redux/hooks";
import { deleteCategory } from "../../redux/slices/categorySlice";

export default function AddCategoryModal(): JSX.Element {
  const { categoryId } = useGlobalSearchParams<{ categoryId?: string }>();
  const category = useAppSelector((state) =>
    state.categories.find((c) => c.id === categoryId),
  );

  const [name, setName] = useState(category?.name ?? "");
  const [groupId, setGroupId] = useState(category?.categoryGroupId ?? "");
  const [type, setType] = useState(category?.type ?? "");
  const [startDate, setStartDate] = useState(category?.endDate ?? "");
  const [goal, setGoal] = useState(category?.goal?.toString() ?? "");

  const addCategory = (addAnother: boolean): boolean => {
    if (
      name === "" ||
      groupId === "" ||
      type === "" ||
      startDate === "" ||
      goal === ""
    ) {
      return false;
    }

    if (addAnother) {
      setName("");
      setGoal("");
    } else {
      router.back();
    }

    return true;
  };

  return (
    <AddModalWrapper
      object={category}
      objectName="Category"
      deleteAction={deleteCategory}
    >
      <BottomSheetModalProvider>
        <SettingsGroupContainer>
          <SettingsContainer>
            <SettingsTitle>Name</SettingsTitle>
            <SettingsInput
              value={name}
              setValue={setName}
              placeholder="Groceries..."
              maxLength={20}
            />
          </SettingsContainer>
          <SettingsContainer>
            <SettingsTitle>Category Group</SettingsTitle>
            <CategoryGroupBottomSheet
              categoryGroupId={groupId}
              setCategoryGroupId={setGroupId}
            />
          </SettingsContainer>
          <SettingsContainer isLast={true}>
            <SettingsTitle>Allocation Goal</SettingsTitle>
            <SettingsDollarInput value={goal} setValue={setGoal} />
          </SettingsContainer>
        </SettingsGroupContainer>

        <View style={sharedStyles.settingsAddButtonGroup}>
          <SettingsAddAnotherButton onPress={() => addCategory(true)}>
            Save and Add Another
          </SettingsAddAnotherButton>
          <SettingsButton onPress={() => addCategory(false)}>
            Add Category
          </SettingsButton>
        </View>
      </BottomSheetModalProvider>
    </AddModalWrapper>
  );
}
