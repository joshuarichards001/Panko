import React from "react";
import { Text } from "../../components/themed";

interface Props {
  categoryId: string;
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryBottomSheet({
  categoryId,
  setCategoryId,
}: Props): JSX.Element {
  return <Text>Category</Text>;
}
