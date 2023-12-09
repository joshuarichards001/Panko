import { Action, Middleware } from "redux";
import { deleteCategory } from "./slices/categorySlice";
import { deletePayee } from "./slices/payeeSlice";
import { RootState } from "./store";

const fixDisconnectedTransactionMiddleware: Middleware<{}, RootState> = (storeApi) => (next) => (action) => {
  const destructiveActions: string[] = [deleteCategory.type, deletePayee.type]; // TODO: add more actions

  if (!isAction(action) || !destructiveActions.includes(action.type)) {
    return next(action);
  }

  console.log("Do some logic here");

  return next(action);
};

function isAction(action: unknown): action is Action {
  return (action as Action).type !== undefined;
}

export const rootCustomMiddleware = [fixDisconnectedTransactionMiddleware];
