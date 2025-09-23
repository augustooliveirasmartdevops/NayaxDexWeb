import * as types from "./types";

export const userSignIn = async (dispatch, payload) => {
  dispatch({ type: types.SET_LOGIN, payload });
};

export const userSignOut = async (dispatch) => {
  dispatch({ type: types.SET_LOGOUT });
};
