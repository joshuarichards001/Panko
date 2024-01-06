import React from "react";
import { StyleSheet, View } from "react-native";
import { generalStyles } from "../constants/styles";
import { textStyles } from "../constants/textStyles";
import Category from "./category";
import { Text, useThemeColor } from "./themed";

interface ICategoryGroupExtended extends ICategoryGroup {
  categories: ICategory[];
}

interface Props {
  categoryGroup: ICategoryGroupExtended;
}

export default function CategoryGroup({ categoryGroup }: Props): JSX.Element {
  const { background, grey2 } = useThemeColor();

  return (
    <View
      style={[
        styles.container,
        generalStyles.boxShadow,
        { backgroundColor: background },
      ]}
    >
      <View
        style={[
          styles.titleContainer,
          {
            borderBottomWidth: categoryGroup.categories.length > 0 ? 1 : 0,
            borderBottomColor: grey2,
          },
        ]}
      >
        <Text style={textStyles.sb}>{categoryGroup.name}</Text>
      </View>
      <View>
        {categoryGroup.categories.map((category, i) => {
          return (
            <Category
              category={category}
              key={category.id}
              isLast={i === categoryGroup.categories.length - 1}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 14,
  },
  titleContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
