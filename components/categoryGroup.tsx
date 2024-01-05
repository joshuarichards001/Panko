import React from "react";
import { View } from "react-native";
import Category from "./category";
import { Text } from "./themed";

interface ICategoryGroupExtended extends ICategoryGroup {
  categories: ICategory[];
}

interface Props {
  categoryGroup: ICategoryGroupExtended;
}

export default function CategoryGroup({ categoryGroup }: Props): JSX.Element {
  return (
    <View>
      <Text>{categoryGroup.name}</Text>
      <View>
        {categoryGroup.categories.map((category) => {
          return <Category category={category} key={category.id} />;
        })}
      </View>
    </View>
  );
}
