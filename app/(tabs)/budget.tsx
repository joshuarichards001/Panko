import { router } from "expo-router";
import React from "react";
import CategoryGroup from "../../components/categoryGroup";
import {
  SettingsButton,
  SettingsSubtleButton,
} from "../../components/settingsComponents";
import PageWrapper from "../../components/wrappers/pageWrapper";
import { generalStyles } from "../../constants/styles";
import { useAppSelector } from "../../redux/hooks";
import { View } from "react-native";

export default function Budget(): React.JSX.Element {
  const categories = useAppSelector((state) => state.categories);
  const categoryGroups = useAppSelector((state) => state.categoryGroups);

  const categoryGroupsWithCategories = categoryGroups.map((group) => {
    const groupCategories = categories.filter(
      (category) => category.categoryGroupId === group.id,
    );
    return {
      ...group,
      categories: groupCategories,
    };
  });

  return (
    <PageWrapper>
      {categoryGroupsWithCategories.map((categoryGroup) => (
        <CategoryGroup categoryGroup={categoryGroup} key={categoryGroup.id} />
      ))}
      <SettingsSubtleButton
        onPress={() => {
          router.push("/addCategoryModal");
        }}
      >
        Add Category
      </SettingsSubtleButton>
      <View style={generalStyles.tabAddButton}>
        <SettingsButton
          onPress={() => {
            router.push("/addTransactionModal");
          }}
        >
          Add Transaction
        </SettingsButton>
      </View>
    </PageWrapper>
  );
}
