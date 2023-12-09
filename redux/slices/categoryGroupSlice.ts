import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const categoryGroupSlice = createSlice({
  name: "categoryGroups",
  initialState: [] as ICategoryGroup[],
  reducers: {
    addCategoryGroup(state, action: PayloadAction<ICategoryGroup>) {
      state.push(action.payload);
    },
    setCategoryGroups(_, action: PayloadAction<ICategoryGroup[]>) {
      return action.payload;
    },
    updateCategoryGroup(state, action: PayloadAction<ICategoryGroup>) {
      return state.map((category) => (category.id === action.payload.id ? action.payload : category));
    },
    deleteCategoryGroup(state, action: PayloadAction<string>) {
      return state.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategoryGroup, setCategoryGroups, updateCategoryGroup, deleteCategoryGroup } =
  categoryGroupSlice.actions;
export const categoryGroupReducer = categoryGroupSlice.reducer;
