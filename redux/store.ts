import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { accountReducer } from "./slices/accountSlice";
import { budgetReducer } from "./slices/budgetSlice";
import { categoryGroupReducer } from "./slices/categoryGroupSlice";
import { categoryReducer } from "./slices/categorySlice";
import { payeeReducer } from "./slices/payeeSlice";
import { transactionReducer } from "./slices/transactionSlice";
import { userReducer } from "./slices/userSlice";

const persistConfig = {
  storage: AsyncStorage,
  key: "root",
};

const rootReducer = combineReducers({
  user: userReducer,
  budgets: budgetReducer,
  accounts: accountReducer,
  payees: payeeReducer,
  categories: categoryReducer,
  categoryGroups: categoryGroupReducer,
  transactions: transactionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
