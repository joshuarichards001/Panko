interface IUser {
  id: string;
  name?: string;
  email?: string;
  isOnboarded: boolean;
  isDailyNotificationEnabled: boolean;
  dailyNotificationTime?: string;
  theme: "system" | "light" | "dark";
  isProgressBarsHidden: boolean;
}

interface IBudget {
  id: string;
  name: string;
  defaultAccountId?: string;
}

interface IAccount {
  id: string;
  budgetId: string;
  name: string;
  balance: number;
  type: "cash" | "debt";
  isClosed: boolean;
}

interface IPayee {
  id: string;
  budgetId: string;
  accountId?: string;
  categoryId?: string;
  name: string;
}

interface ICategoryGroup {
  id: string;
  budgetId: string;
  name: string;
  isCollapsed: boolean;
}

/**
 * This interface has a complex relationship between category type and date. It is used to represent a category.
 * - If type is "week", date is the index of the start date day of the week (0 for Sunday, 1 for Monday, etc.).
 * - If type is "fortnight", date is the timestamp of the first day the category happens (1703375366119).
 * - If type is "month", date is the start date day of the month (1 for the first day, 2 for the second day, etc.).
 * - If type is "year", date is a end date decimal where the whole number is the month and the decimal is the day (8.13 for August 13th).
 * - If type is "once", date is the end date as a timestamp of the day the category ends (1703375366119).
 * - If type is "open", date is undefined or 0.
 */
interface ICategory {
  id: string;
  budgetId: string;
  categoryGroupId: string;
  name: string;
  allocated: number;
  spent: number;
  type: ICategoryType;
  date?: number;
  goal?: number;
}

interface ITransaction {
  id: string;
  budgetId: string;
  accountId: string;
  payeeId?: string;
  categoryGroupId: string;
  categoryId: string;
  type: "income" | "expense";
  amount: number;
  date: string;
}

type ICategoryType = "week" | "fortnight" | "month" | "year" | "once" | "open";

interface IPickerItem {
  label: string;
  value: string | number;
}
