import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { router, useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import AddModalWrapper from "../../components/addModalWrapper";
import CategoryGroupBottomSheet from "../../components/bottomSheets/categoryGroupBottomSheet";
import {
  SettingsAddAnotherButton,
  SettingsButton,
  SettingsContainer,
  SettingsDatePicker,
  SettingsDollarInput,
  SettingsGroupContainer,
  SettingsInput,
  SettingsPicker,
  SettingsTitle,
  sharedStyles,
} from "../../components/settingsComponents";
import { CATEGORY_TYPE_DROPDOWN_ITEMS } from "../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addCategory,
  deleteCategory,
  updateCategory,
} from "../../redux/slices/categorySlice";

export default function AddCategoryModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const budgetId = useAppSelector((state) => state.budgets[0].id);
  const { categoryId } = useGlobalSearchParams<{ categoryId?: string }>();
  const category = useAppSelector((state) =>
    state.categories.find((c) => c.id === categoryId),
  );

  const [name, setName] = useState(category?.name ?? "");
  const [groupId, setGroupId] = useState(category?.categoryGroupId ?? "");
  const [type, setType] = useState<ICategoryType | "">(category?.type ?? "");
  const [date, setDate] = useState(category?.date ?? new Date().toISOString());
  const [goal, setGoal] = useState(category?.goal?.toString() ?? "");

  const isDateNecessary = (t: ICategoryType): boolean =>
    ["week", "fortnight", "month", "year", "once"].includes(t);

  const addCategoryToStore = (addAnother: boolean): boolean => {
    if (name === "" || groupId === "" || type === "" || goal === "") {
      return false;
    }

    const newCategory: ICategory = {
      id: category !== undefined ? category.id : uuidv4(),
      budgetId,
      name,
      categoryGroupId: groupId,
      type,
      date: isDateNecessary(type) ? date : undefined,
      goal: parseFloat(goal),
      allocated: 0,
      spent: 0,
    };

    dispatch(
      category !== undefined
        ? updateCategory(newCategory)
        : addCategory(newCategory),
    );

    if (addAnother) {
      setName("");
      setGroupId("");
      setType("");
      setDate(new Date().toISOString());
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
          <SettingsContainer>
            <SettingsTitle>Category Type</SettingsTitle>
            <SettingsPicker
              value={type}
              setValue={setType}
              items={CATEGORY_TYPE_DROPDOWN_ITEMS}
            />
          </SettingsContainer>
          {type !== "" && isDateNecessary(type) && (
            <SettingsContainer>
              <SettingsTitle>Date</SettingsTitle>
              <SettingsDatePicker date={date} setDate={setDate} />
            </SettingsContainer>
          )}
          <SettingsContainer isLast={true}>
            <SettingsTitle>Allocation Goal</SettingsTitle>
            <SettingsDollarInput value={goal} setValue={setGoal} />
          </SettingsContainer>
        </SettingsGroupContainer>

        <View style={sharedStyles.settingsAddButtonGroup}>
          <SettingsAddAnotherButton onPress={() => addCategoryToStore(true)}>
            Save and Add Another
          </SettingsAddAnotherButton>
          <SettingsButton onPress={() => addCategoryToStore(false)}>
            Add Category
          </SettingsButton>
        </View>
      </BottomSheetModalProvider>
    </AddModalWrapper>
  );
}
