import { AuthActionTypes } from "./constants";

export const loginUser = (data) => ({
  type: AuthActionTypes.LOGIN_USER,
  payload: data,
});

export const logoutUser = () => ({
  type: AuthActionTypes.LOGOUT_USER,
  payload: {},
});

export const signupUser = (data) => ({
  type: AuthActionTypes.SIGNUP_USER,
  payload: data,
});
