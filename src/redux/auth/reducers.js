import { AuthActionTypes } from "./constants";

const getUserFromStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

const initialState = {
  data: getUserFromStorage(),
  loading: false,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER_LOADING:
      return { ...state, loading: true, error: null };
    case AuthActionTypes.LOGIN_USER_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case AuthActionTypes.LOGIN_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case AuthActionTypes.LOGIN_USER_RESET:
      return initialState;
    default:
      return state;
  }
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGOUT_USER_LOADING:
      return { ...state, loading: true, error: null };
    case AuthActionTypes.LOGOUT_USER_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case AuthActionTypes.LOGOUT_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case AuthActionTypes.LOGOUT_USER_RESET:
      return initialState;
    default:
      return state;
  }
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGNUP_USER_LOADING:
      return { ...state, loading: true, error: null };
    case AuthActionTypes.SIGNUP_USER_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case AuthActionTypes.SIGNUP_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case AuthActionTypes.SIGNUP_USER_RESET:
      return initialState;
    default:
      return state;
  }
};
