import React, { useEffect, useState } from "react";
import {
  getCategoryDatePickerFortnightDays,
  getCategoryDatePickerMonthDays,
  getCategoryDatePickerWeekDays,
  getDefaultCategoryDateInitialValue,
} from "../functions/categoryDateHelper";
import { SettingsDatePicker, SettingsPicker } from "./settingsComponents";

interface Props {
  date: number;
  setDate: React.Dispatch<React.SetStateAction<number>>;
  categoryType: ICategoryType;
}

export default function CategoryDatePicker({
  date,
  setDate,
  categoryType,
}: Props): JSX.Element {
  const [items, setItems] = useState<IPickerItem[]>([]);

  useEffect(() => {
    setDate(getDefaultCategoryDateInitialValue(categoryType));
    switch (categoryType) {
      case "week":
        setItems(getCategoryDatePickerWeekDays());
        break;
      case "fortnight":
        setItems(getCategoryDatePickerFortnightDays());
        break;
      case "month":
        setItems(getCategoryDatePickerMonthDays());
        break;
      default:
        setItems([]);
    }
  }, [categoryType]);

  const picker = (): JSX.Element => {
    if (["week", "fortnight", "month"].includes(categoryType)) {
      return <SettingsPicker value={date} setValue={setDate} items={items} />;
    } else if (categoryType === "year") {
      return (
        <SettingsDatePicker
          date={date ?? new Date().getTime()}
          setDate={setDate}
          display="spinner"
          maximumDate={
            new Date(new Date().setFullYear(new Date().getFullYear() + 1))
          }
          minimumDate={new Date()}
        />
      );
    } else if (categoryType === "once") {
      return <SettingsDatePicker date={date} setDate={setDate} />;
    } else {
      return <></>;
    }
  };

  return picker();
}
