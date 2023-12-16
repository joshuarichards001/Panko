import { useGlobalSearchParams } from "expo-router";
import React from "react";
import AddModalWrapper from "../../components/addModalWrapper";
import { Text } from "../../components/themed";
import { useAppSelector } from "../../redux/hooks";
import { deleteCategory } from "../../redux/slices/categorySlice";

export default function AddCategoryModal(): JSX.Element {
  const { categoryId } = useGlobalSearchParams<{ categoryId?: string }>();
  const category = useAppSelector((state) =>
    state.categories.find((c) => c.id === categoryId),
  );

  return (
    <AddModalWrapper
      object={category}
      objectName="Category"
      deleteAction={deleteCategory}
    >
      <Text>category</Text>
    </AddModalWrapper>
  );
}
