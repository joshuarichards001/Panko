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

interface ICategory {
  id: string;
  budgetId: string;
  categoryGroupId: string;
  name: string;
  allocated: number;
  spent: number;
  type: ICategoryType;
  endDate?: string;
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
