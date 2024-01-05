import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "./themed";

interface Props {
  category: ICategory;
}

export default function Category({ category }: Props): JSX.Element {
  return (
    <TouchableOpacity
      key={category.id}
      onPress={() => {
        router.push({
          pathname: "/addCategoryModal",
          params: { categoryId: category.id },
        });
      }}
    >
      <Text>{category.name}</Text>
    </TouchableOpacity>
  );
}
