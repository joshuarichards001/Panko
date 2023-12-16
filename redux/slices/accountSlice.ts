import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "accounts",
  initialState: [] as IAccount[],
  reducers: {
    addAccount(state, action: PayloadAction<IAccount>) {
      state.push(action.payload);
    },
    setAccounts(_, action: PayloadAction<IAccount[]>) {
      return action.payload;
    },
    updateAccount(state, action: PayloadAction<IAccount>) {
      return state.map((account) =>
        account.id === action.payload.id ? action.payload : account,
      );
    },
    closeAccount(state, action: PayloadAction<string>) {
      return state.map((account) =>
        account.id === action.payload
          ? { ...account, isClosed: true }
          : account,
      );
    },
  },
});

export const { addAccount, setAccounts, updateAccount, closeAccount } =
  accountSlice.actions;
export const accountReducer = accountSlice.reducer;
