import { DAYS_OF_MONTH, DAYS_OF_WEEK } from "../constants/constants";

export const getDefaultCategoryDateInitialValue = (
  categoryType: ICategoryType,
): number => {
  const todayTimestamp = new Date(new Date().toDateString()).getTime();

  switch (categoryType) {
    case "week":
      return 0;
    case "fortnight":
      return todayTimestamp;
    case "month":
      return 1;
    case "year":
      return todayTimestamp;
    case "once":
      return todayTimestamp;
    case "open":
      return 0;
  }
};

export const getCategoryDatePickerWeekDays = (): IPickerItem[] => {
  const pickerDaysOfWeek: IPickerItem[] = [];

  DAYS_OF_WEEK.forEach((day, i) => {
    pickerDaysOfWeek.push({ label: day, value: i });
  });

  return pickerDaysOfWeek;
};

export const getCategoryDatePickerFortnightDays = (): IPickerItem[] => {
  const today = new Date();
  const pickerDaysOfWeek: IPickerItem[] = [];

  for (let i = 0; i < 14; i++) {
    const day = new Date();
    day.setDate(today.getDate() - i);
    day.setHours(0, 0, 0, 0);
    pickerDaysOfWeek.push({
      label: day.toDateString().slice(0, 10),
      value: day.getTime(),
    });
  }

  return pickerDaysOfWeek;
};

export const getCategoryDatePickerMonthDays = (): IPickerItem[] => {
  const pickerDaysOfMonth: IPickerItem[] = [];

  DAYS_OF_MONTH.forEach((day, i) => {
    pickerDaysOfMonth.push({ label: day, value: i + 1 });
  });

  return pickerDaysOfMonth;
};
