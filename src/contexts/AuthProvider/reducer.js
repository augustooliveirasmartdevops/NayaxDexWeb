import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_LOGIN:
      return {
        ...state,
        encodedCredentials: action.payload.encodedCredentials,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case types.SET_LOGOUT:
      return { isAuthenticated: false };
    default:
      return { ...state };
  }
};
