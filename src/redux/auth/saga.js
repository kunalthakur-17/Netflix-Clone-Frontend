import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { AuthActionTypes } from "./constants";
import { login, logout, signup } from "./api";
import { setAuthorization } from "../../helpers/api/apiCore";
import { clearAuthData } from "../../utils/tokenUtils";

function* loginSagaFunction({ payload }) {
  try {
    yield put({ type: AuthActionTypes.LOGIN_USER_LOADING });
    const response = yield call(login, payload);
    if (response?.status === 200) {
      const userData = {
        id: response?.data?.user?._id,
        username: response?.data?.user?.fullName,
        email: response?.data?.user?.email,
        token: response?.data?.user?.token,
      };
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem("NETFLIX_CLONE", JSON.stringify(userData));
      setAuthorization(userData.token);
      yield put({ type: AuthActionTypes.LOGIN_USER_SUCCESS, payload: userData });
    } else {
      yield put({ type: AuthActionTypes.LOGIN_USER_FAILURE, payload: response?.data?.message || "Login failed" });
    }
  } catch (error) {
    yield put({ type: AuthActionTypes.LOGIN_USER_FAILURE, payload: error });
  }
}

function* logoutSagaFunction() {
  try {
    yield put({ type: AuthActionTypes.LOGOUT_USER_LOADING });
    yield call(logout);
    clearAuthData();
    setAuthorization(null);
    yield put({ type: AuthActionTypes.LOGOUT_USER_SUCCESS, payload: {} });
    yield put({ type: AuthActionTypes.LOGIN_USER_RESET });
  } catch (error) {
    clearAuthData();
    setAuthorization(null);
    yield put({ type: AuthActionTypes.LOGIN_USER_RESET });
    yield put({ type: AuthActionTypes.LOGOUT_USER_FAILURE, payload: error });
  }
}

function* signupSagaFunction({ payload }) {
  try {
    yield put({ type: AuthActionTypes.SIGNUP_USER_LOADING });
    const response = yield call(signup, payload);
    if (response?.status === 200 || response?.status === 201) {
      yield put({ type: AuthActionTypes.SIGNUP_USER_SUCCESS, payload: response.data });
    } else {
      yield put({ type: AuthActionTypes.SIGNUP_USER_FAILURE, payload: response?.data?.message || "Signup failed" });
    }
  } catch (error) {
    yield put({ type: AuthActionTypes.SIGNUP_USER_FAILURE, payload: error });
  }
}

export function* watchLogin() {
  yield takeEvery(AuthActionTypes.LOGIN_USER, loginSagaFunction);
}

export function* watchLogout() {
  yield takeEvery(AuthActionTypes.LOGOUT_USER, logoutSagaFunction);
}

export function* watchSignup() {
  yield takeEvery(AuthActionTypes.SIGNUP_USER, signupSagaFunction);
}

function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
  ]);
}

export default authSaga;
