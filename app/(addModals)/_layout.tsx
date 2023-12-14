import { Stack } from "expo-router";
import React from "react";

export default function AddModalLayout(): JSX.Element {
  return (
    <Stack>
      <Stack.Screen name="addAccountModal" options={{ headerShown: false }} />
      <Stack.Screen name="addPayeeModal" options={{ headerShown: false }} />
      <Stack.Screen name="addCategoryModal" options={{ headerShown: false }} />
      <Stack.Screen
        name="addTransactionModal"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
