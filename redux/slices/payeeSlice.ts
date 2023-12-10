import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const payeeSlice = createSlice({
  name: "payees",
  initialState: [] as IPayee[],
  reducers: {
    addPayee(state, action: PayloadAction<IPayee>) {
      state.push(action.payload);
    },
    setPayees(_, action: PayloadAction<IPayee[]>) {
      return action.payload;
    },
    updatePayee(state, action: PayloadAction<IPayee>) {
      return state.map((payee) =>
        payee.id === action.payload.id ? action.payload : payee,
      );
    },
    deletePayee(state, action: PayloadAction<string>) {
      return state.filter((payee) => payee.id !== action.payload);
    },
  },
});

export const { addPayee, setPayees, updatePayee, deletePayee } =
  payeeSlice.actions;
export const payeeReducer = payeeSlice.reducer;
