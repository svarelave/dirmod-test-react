import { Reducer } from "redux";

export const token: Reducer<any> = (
  state = null,
  action
) => {
  switch (action.type) {
    case "Token/SET":
      return action.token;
    case "Token/REMOVE":
      return null;
    default:
      return state;
  }
};
