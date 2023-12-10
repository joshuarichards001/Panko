import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: IUser = {
  id: "00000000-0000-0000-0000-000000000000",
  isOnboarded: false,
  isDailyNotificationEnabled: false,
  theme: "system",
  isProgressBarsHidden: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(_, action: PayloadAction<IUser>) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
