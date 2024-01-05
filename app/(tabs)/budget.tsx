import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SettingsButton } from "../../components/settingsComponents";
import { Text } from "../../components/themed";
import { tabStyles } from "../../constants/styles";
import { useAppSelector } from "../../redux/hooks";

export default function Budget(): React.JSX.Element {
  const categories = useAppSelector((state) => state.categories);

  return (
    <View style={tabStyles.container}>
      {categories.map((category) => (
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
      ))}
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
