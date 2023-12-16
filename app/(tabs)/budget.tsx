import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SettingsButton } from "../../components/settingsComponents";
import { Text } from "../../components/themed";

export default function Budget(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <SettingsButton
        onPress={() => {
          router.push("/addAccountModal");
        }}
      >
        <Text>Add Account</Text>
      </SettingsButton>
      <SettingsButton
        onPress={() => {
          router.push("/addCategoryModal");
        }}
      >
        <Text>Add Category</Text>
      </SettingsButton>
      <SettingsButton
        onPress={() => {
          router.push("/addPayeeModal");
        }}
      >
        <Text>Add Payee</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
