import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import CategoryGroup from "../../components/categoryGroup";
import { SettingsButton } from "../../components/settingsComponents";
import { Text } from "../../components/themed";
import { tabStyles } from "../../constants/styles";
import { useAppSelector } from "../../redux/hooks";

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
    <View style={tabStyles.container}>
      {categoryGroupsWithCategories.map((categoryGroup) => (
        <CategoryGroup categoryGroup={categoryGroup} key={categoryGroup.id} />
      ))}
      <SettingsButton
        onPress={() => {
          router.push("/addCategoryModal");
        }}
      >
        <Text>Add Category</Text>
      </SettingsButton>
      <SettingsButton
        onPress={() => {
          router.push("/addTransactionModal");
        }}
      >
        <Text>Add Transaction</Text>
      </SettingsButton>
    </View>
  );
}
