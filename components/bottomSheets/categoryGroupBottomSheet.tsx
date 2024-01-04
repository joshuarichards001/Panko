import { type BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addCategoryGroup } from "../../redux/slices/categoryGroupSlice";
import {
  SettingsAddAnotherButton,
  SettingsContainer,
  SettingsGroupContainer,
} from "../settingsComponents";
import { Text } from "../themed";
import BottomSheetWrapper from "../wrappers/bottomSheetWrapper";

interface IProps {
  categoryGroupId: string;
  setCategoryGroupId: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryGroupBottomSheet({
  categoryGroupId,
  setCategoryGroupId,
}: IProps): JSX.Element {
  const dispatch = useAppDispatch();

  const budgetId = useAppSelector((state) => state.budgets[0].id);
  const categoryGroups = useAppSelector((state) => state.categoryGroups);
  const categoryGroup = categoryGroups.find((cg) => cg.id === categoryGroupId);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // const [search, setSearch] = useState("");

  const handleAddNewGroup = (): void => {
    Alert.prompt(
      "Add Category Group",
      "Enter the name of the category group you would like to create.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: (groupName) => {
            groupName !== undefined && addNewCategoryGroup(groupName);
          },
        },
      ],
    );
  };

  const addNewCategoryGroup = (groupName: string): boolean => {
    if (groupName === "") {
      return false;
    }

    const id = uuidv4();

    const newGroup: ICategoryGroup = {
      name: groupName,
      isCollapsed: false,
      budgetId,
      id,
    };

    dispatch(addCategoryGroup(newGroup));
    setCategoryGroupId(id);
    bottomSheetModalRef.current?.dismiss();
    return true;
  };

  return (
    <BottomSheetWrapper
      buttonText={categoryGroup?.name}
      bottomSheetModalRef={bottomSheetModalRef}
      buttonPlaceholder="Checking..."
    >
      {/* <SettingsSearchBar search={search} setSearch={setSearch} /> */}
      <SettingsAddAnotherButton onPress={handleAddNewGroup}>
        + Create New
      </SettingsAddAnotherButton>
      <SettingsGroupContainer>
        {categoryGroups.map((cg, i) => (
          <SettingsContainer
            key={cg.id}
            isLast={categoryGroups.length - 1 === i}
          >
            <TouchableOpacity
              onPress={() => {
                setCategoryGroupId(cg.id);
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text>{cg.name}</Text>
            </TouchableOpacity>
          </SettingsContainer>
        ))}
      </SettingsGroupContainer>
    </BottomSheetWrapper>
  );
}
