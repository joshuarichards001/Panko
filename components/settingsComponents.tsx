import React from "react";
import { StyleSheet, View } from "react-native";
import { generalStyles } from "../constants/styles";
import { textStyles } from "../constants/textStyles";
import { Text, TextInput, useThemeColor } from "./themed";

interface IProps {
  children: React.ReactNode;
}

interface IInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  maxLength?: number;
}

const SettingGroupContainer = ({ children }: IProps): JSX.Element => {
  const { background } = useThemeColor();

  return (
    <View
      style={[
        styles.settingsGroupContainer,
        generalStyles.boxShadow,
        { backgroundColor: background },
      ]}
    >
      {children}
    </View>
  );
};

const SettingContainer = ({ children }: IProps): JSX.Element => {
  const { grey2 } = useThemeColor();

  return (
    <View
      style={[
        styles.settingsContainer,
        { borderBottomColor: grey2, borderBottomWidth: 1 },
      ]}
    >
      {children}
    </View>
  );
};

const SettingTitle = ({ children }: IProps): JSX.Element => {
  const { grey4 } = useThemeColor();

  return (
    <Text style={[textStyles.xs, styles.settingsTitle, { color: grey4 }]}>
      {children}
    </Text>
  );
};

const SettingInput = ({
  value,
  setValue,
  placeholder,
  maxLength,
}: IInputProps): JSX.Element => {
  const { grey3 } = useThemeColor();

  return (
    <TextInput
      value={value}
      onChangeText={(text: string) => {
        setValue(text);
      }}
      placeholder={placeholder}
      maxLength={maxLength}
      placeholderTextColor={grey3}
    />
  );
};

const SettingDollarInput = ({ value, setValue }: IInputProps): JSX.Element => {
  const { grey3, text } = useThemeColor();

  return (
    <View style={styles.dollarInputContainer}>
      <Text style={{ color: value === "" ? grey3 : text }}>$</Text>
      <TextInput
        placeholderTextColor={grey3}
        value={value}
        onChangeText={(text: string) => {
          setValue(text);
        }}
        placeholder="0.00"
        keyboardType="decimal-pad"
        maxLength={10}
      />
    </View>
  );
};

const SettingButton = ({ children }: IProps): JSX.Element => {
  const { primary } = useThemeColor();

  return (
    <View
      style={[
        styles.settingsButton,
        generalStyles.boxShadow,
        { backgroundColor: primary },
      ]}
    >
      <Text style={textStyles.m}>{children}</Text>
    </View>
  );
};

export {
  SettingButton,
  SettingContainer,
  SettingDollarInput,
  SettingGroupContainer,
  SettingInput,
  SettingTitle,
};

const styles = StyleSheet.create({
  dollarInputContainer: {
    flexDirection: "row",
  },
  settingsGroupContainer: {
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 20,
  },
  settingsContainer: {
    padding: 10,
  },
  settingsTitle: {
    marginBottom: 5,
  },
  settingsButton: {
    padding: 14,
    borderRadius: 999,
    alignItems: "center",
  },
});
