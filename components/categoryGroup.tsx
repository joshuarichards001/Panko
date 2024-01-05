import React from "react";
import { StyleSheet, View } from "react-native";
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
    <View style={styles.container}>
      <Text>{categoryGroup.name}</Text>
      <View>
        {categoryGroup.categories.map((category) => {
          return <Category category={category} key={category.id} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
  },
});
