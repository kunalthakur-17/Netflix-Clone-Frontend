import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { SearchActionTypes } from "./constants";
import { searchMovieApi } from "./api";

function* searchMovieSaga({ payload: query }) {
  try {
    yield put({ type: SearchActionTypes.SEARCH_MOVIE_LOADING });
    const response = yield call(searchMovieApi, query);
    if (response.status === 200) {
      yield put({
        type: SearchActionTypes.SEARCH_MOVIE_SUCCESS,
        payload: { query, movies: response.data.results },
      });
    } else {
      yield put({ type: SearchActionTypes.SEARCH_MOVIE_FAILURE, payload: response.data });
    }
  } catch (error) {
    yield put({ type: SearchActionTypes.SEARCH_MOVIE_FAILURE, payload: error });
  }
}

function* watchSearchMovie() {
  yield takeEvery(SearchActionTypes.SEARCH_MOVIE, searchMovieSaga);
}

function* searchSaga() {
  yield all([fork(watchSearchMovie)]);
}

export default searchSaga;
