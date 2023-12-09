import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: [] as ICategory[],
  reducers: {
    addCategory(state, action: PayloadAction<ICategory>) {
      state.push(action.payload);
    },
    setCategories(_, action: PayloadAction<ICategory[]>) {
      return action.payload;
    },
    updateCategory(state, action: PayloadAction<ICategory>) {
      return state.map((category) => (category.id === action.payload.id ? action.payload : category));
    },
    deleteCategory(state, action: PayloadAction<string>) {
      return state.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, setCategories, updateCategory, deleteCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
