import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { generalStyles } from "../constants/styles";
import { textStyles } from "../constants/textStyles";
import { capitalize } from "../functions/helper";
import { Text, TextInput, useThemeColor } from "./themed";

interface IContainerProps {
  children: React.ReactNode;
}

interface IInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  maxLength?: number;
}

interface IButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

interface ISegmentProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

const SettingsGroupContainer = ({ children }: IContainerProps): JSX.Element => {
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

const SettingsContainer = ({ children }: IContainerProps): JSX.Element => {
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

const SettingsTitle = ({ children }: IContainerProps): JSX.Element => {
  const { grey4 } = useThemeColor();

  return (
    <Text style={[textStyles.xs, styles.settingsTitle, { color: grey4 }]}>
      {children}
    </Text>
  );
};

const SettingsInput = ({
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

const SettingsDollarInput = ({ value, setValue }: IInputProps): JSX.Element => {
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

const SettingsButton = ({ children, onPress }: IButtonProps): JSX.Element => {
  const { primary } = useThemeColor();

  return (
    <TouchableOpacity
      style={[
        styles.settingsButton,
        generalStyles.boxShadow,
        { backgroundColor: primary },
      ]}
      onPress={onPress}
    >
      <Text style={textStyles.m}>{children}</Text>
    </TouchableOpacity>
  );
};

const SettingsSegmentedControl = ({
  value,
  setValue,
  options,
}: ISegmentProps): JSX.Element => {
  const { primary, background } = useThemeColor();

  return (
    <View
      style={[
        styles.settingsSegmentedControl,
        generalStyles.boxShadow,
        { backgroundColor: background },
      ]}
    >
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.settingsSegmentedControlButton,
            {
              backgroundColor: option === value ? primary : "transparent",
              width: `${100 / options.length}%`,
            },
          ]}
          onPress={() => {
            setValue(option);
          }}
        >
          <Text>{capitalize(option)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export {
  SettingsButton,
  SettingsContainer,
  SettingsDollarInput,
  SettingsGroupContainer,
  SettingsInput,
  SettingsSegmentedControl,
  SettingsTitle,
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
    marginBottom: 20,
  },
  settingsSegmentedControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 14,
    padding: 8,
  },
  settingsSegmentedControlButton: {
    padding: 6,
    borderRadius: 10,
    alignItems: "center",
  },
});
