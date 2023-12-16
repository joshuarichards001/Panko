import { type ActionCreator, type PayloadAction } from "@reduxjs/toolkit";
import { Stack, router } from "expo-router";
import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../redux/hooks";
import ModalWrapper from "./modalWrapper";
import { Text, useThemeColor } from "./themed";

interface IProps {
  children: React.ReactNode;
  object: IAccount | ICategory | ITransaction | IPayee | undefined;
  objectName: string;
  deleteAction: ActionCreator<PayloadAction<string>>;
}

export default function AddModalWrapper({
  children,
  object,
  objectName,
  deleteAction,
}: IProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { error } = useThemeColor();

  const deleteAlert = (): void => {
    if (object !== undefined) {
      Alert.alert(
        `Delete ${objectName}`,
        `Are you sure you want to delete this ${objectName}`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Delete",
            style: "destructive",
            onPress: () => {
              dispatch(deleteAction(object.id));
              router.back();
            },
          },
        ],
      );
    }
  };

  return (
    <ModalWrapper>
      <Stack.Screen
        options={{
          title: `${object !== undefined ? "Edit" : "Add"} ${objectName}`,
          headerRight: () =>
            object !== undefined && (
              <TouchableOpacity onPress={deleteAlert}>
                <Text style={{ color: error }}>Delete</Text>
              </TouchableOpacity>
            ),
        }}
      />
      <View style={styles.container}>{children}</View>
    </ModalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    padding: 20,
    paddingBottom: 80,
  },
});
