import { Dimensions } from "react-native";

export const { height, width } = Dimensions.get("window");

export const categoryTypeDropdownItems: IPickerItem[] = [
  { label: "Weekly", value: "week" },
  { label: "Fortnightly", value: "fortnight" },
  { label: "Monthly", value: "month" },
];

export const themeDropdownItemList: IPickerItem[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const daysOfMonth = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22nd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
];
