import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: [] as ITransaction[],
  reducers: {
    addTransaction(state, action: PayloadAction<ITransaction>) {
      state.push(action.payload);
    },
    setTransactions(_, action: PayloadAction<ITransaction[]>) {
      return action.payload;
    },
    updateTransaction(state, action: PayloadAction<ITransaction>) {
      return state.map((transaction) =>
        transaction.id === action.payload.id ? action.payload : transaction,
      );
    },
    deleteTransaction(state, action: PayloadAction<string>) {
      return state.filter((transaction) => transaction.id !== action.payload);
    },
  },
});

export const {
  addTransaction,
  setTransactions,
  updateTransaction,
  deleteTransaction,
} = transactionSlice.actions;
export const transactionReducer = transactionSlice.reducer;
