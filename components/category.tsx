import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useThemeColor } from "./themed";

interface Props {
  category: ICategory;
  isLast?: boolean;
}

export default function Category({ category, isLast }: Props): JSX.Element {
  const { grey2, primaryChipText, primaryChipBackground } = useThemeColor();

  const chipText = primaryChipText;
  const chipBackground = primaryChipBackground;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderBottomWidth: isLast !== undefined && isLast ? 0 : 1,
          borderBottomColor: grey2,
        },
      ]}
      key={category.id}
      onPress={() => {
        router.push({
          pathname: "/addCategoryModal",
          params: { categoryId: category.id },
        });
      }}
    >
      <Text>{category.name}</Text>
      <View style={[styles.allocatedChip, { backgroundColor: chipBackground }]}>
        <Text style={{ color: chipText }}>${category.allocated}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allocatedChip: {
    borderRadius: 999,
    paddingHorizontal: 5,
  },
});
