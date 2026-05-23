import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import movieSaga from "./movie/saga";
import searchSaga from "./search/saga";

export default function* rootSaga() {
  yield all([authSaga(), movieSaga(), searchSaga()]);
}
