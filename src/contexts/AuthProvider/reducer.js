import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true };
    case types.SET_LOGOUT:
      return { isAuthenticated: false };
    default:
      return { ...state };
  }
};
