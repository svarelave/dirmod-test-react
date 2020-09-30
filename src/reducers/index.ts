import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { token } from "./token";

export const rootReducer = combineReducers({
  token
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
