import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budgets",
  initialState: [] as IBudget[],
  reducers: {
    addBudget(state, action: PayloadAction<IBudget>) {
      state.push(action.payload);
    },
    setBudgets(_, action: PayloadAction<IBudget[]>) {
      return action.payload;
    },
    updateBudget(state, action: PayloadAction<IBudget>) {
      return state.map((budget) =>
        budget.id === action.payload.id ? action.payload : budget,
      );
    },
    deleteBudget(state, action: PayloadAction<string>) {
      return state.filter((budget) => budget.id !== action.payload);
    },
  },
});

export const { addBudget, setBudgets, updateBudget, deleteBudget } =
  budgetSlice.actions;
export const budgetReducer = budgetSlice.reducer;
