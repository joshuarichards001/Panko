import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { generalStyles } from "../constants/styles";
import { textStyles } from "../constants/textStyles";
import { capitalize } from "../functions/helper";
import { Text, TextInput, useThemeColor } from "./themed";

interface IContainerProps {
  children: React.ReactNode;
  isLast?: boolean;
}

interface IInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  maxLength?: number;
  isNumber?: boolean;
}

interface IButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

// TODO: Address any types
interface ISegmentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>;
  options: string[];
}

interface ISearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

// TODO: Address any types
interface IPickerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>;
  items: IPickerItem[];
}

interface IDatePickerProps {
  date: number;
  setDate: React.Dispatch<React.SetStateAction<number>>;
  display?: "inline" | "spinner";
  minimumDate?: Date;
  maximumDate?: Date;
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

const SettingsContainer = ({
  children,
  isLast,
}: IContainerProps): JSX.Element => {
  const { grey2 } = useThemeColor();

  return (
    <View
      style={[
        styles.settingsContainer,
        {
          borderBottomColor:
            isLast !== undefined && isLast ? "transparent" : grey2,
          borderBottomWidth: 1,
        },
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
  isNumber,
}: IInputProps): JSX.Element => {
  const { grey3 } = useThemeColor();

  return (
    <TextInput
      value={value}
      style={styles.settingsInput}
      onChangeText={(text: string) => {
        setValue(text);
      }}
      placeholder={placeholder}
      maxLength={maxLength}
      placeholderTextColor={grey3}
      keyboardType={isNumber === true ? "decimal-pad" : "default"}
    />
  );
};

const SettingsDollarInput = ({ value, setValue }: IInputProps): JSX.Element => {
  const { grey3, text } = useThemeColor();

  return (
    <View style={styles.dollarInputContainer}>
      <Text style={{ color: value === "" ? grey3 : text }}>$</Text>
      <SettingsInput
        value={value}
        setValue={setValue}
        placeholder="0.00..."
        maxLength={8}
        isNumber={true}
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

const SettingsAddAnotherButton = ({
  children,
  onPress,
}: IButtonProps): JSX.Element => {
  const { grey4 } = useThemeColor();

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          textStyles.m,
          styles.settingsAddAnotherButton,
          { color: grey4 },
        ]}
      >
        {children}
      </Text>
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

const SettingsSearchBar = ({
  search,
  setSearch,
}: ISearchProps): JSX.Element => {
  const { grey1 } = useThemeColor();

  return (
    <BottomSheetTextInput
      style={[styles.settingsSearchBar, { backgroundColor: grey1 }]}
      value={search}
      onChangeText={setSearch}
      placeholder="Search..."
    />
  );
};

const SettingsPicker = ({
  value,
  setValue,
  items,
}: IPickerProps): JSX.Element => {
  const { grey3, text } = useThemeColor();

  return (
    <RNPickerSelect
      value={value}
      onValueChange={(v: ICategoryType) => {
        setValue(v);
      }}
      placeholder={{ label: "Select...", value: null }}
      items={items}
      style={{
        inputIOS: { ...textStyles.m, color: text },
        inputAndroid: { ...textStyles.m, color: text },
        placeholder: { color: grey3 },
      }}
    />
  );
};

const SettingsDatePicker = ({
  date,
  setDate,
  display,
  minimumDate,
  maximumDate,
}: IDatePickerProps): JSX.Element => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setDatePickerOpen(true);
        }}
      >
        <Text>{new Date(date).toDateString()}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={datePickerOpen}
        mode="date"
        display={display ?? "inline"}
        onConfirm={(d) => {
          setDatePickerOpen(false);
          setDate(d.getTime());
        }}
        onCancel={() => {
          setDatePickerOpen(false);
        }}
        date={new Date(date)}
        minimumDate={minimumDate ?? new Date("2000-01-01")}
        maximumDate={maximumDate ?? new Date("2100-01-01")}
      />
    </View>
  );
};

export {
  SettingsAddAnotherButton,
  SettingsButton,
  SettingsContainer,
  SettingsDatePicker,
  SettingsDollarInput,
  SettingsGroupContainer,
  SettingsInput,
  SettingsPicker,
  SettingsSearchBar,
  SettingsSegmentedControl,
  SettingsTitle,
};

const styles = StyleSheet.create({
  dollarInputContainer: {
    flexDirection: "row",
  },
  settingsGroupContainer: {
    borderRadius: 14,
    marginBottom: 20,
  },
  settingsContainer: {
    padding: 10,
  },
  settingsTitle: {
    marginBottom: 5,
  },
  settingsInput: {
    width: "100%",
  },
  settingsButton: {
    padding: 14,
    borderRadius: 999,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  settingsAddAnotherButton: {
    paddingBottom: 20,
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
  settingsSearchBar: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
  },
});

export const sharedStyles = StyleSheet.create({
  settingsAddButtonGroup: {
    alignItems: "center",
  },
});
