import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { MovieActionTypes } from "./constants";
import {
  getNowPlayingMoviesApi,
  getPopularMoviesApi,
  getTopRatedMoviesApi,
  getUpcomingMoviesApi,
  getTrailerMovieApi,
} from "./api";

function* getNowPlayingMoviesSaga() {
  try {
    yield put({ type: MovieActionTypes.GET_NOW_PLAYING_MOVIES_LOADING });
    const response = yield call(getNowPlayingMoviesApi);
    if (response.status === 200) {
      yield put({ type: MovieActionTypes.GET_NOW_PLAYING_MOVIES_SUCCESS, payload: response.data.results });
    } else {
      yield put({ type: MovieActionTypes.GET_NOW_PLAYING_MOVIES_FAILURE, payload: response.data });
    }
  } catch (error) {
    yield put({ type: MovieActionTypes.GET_NOW_PLAYING_MOVIES_FAILURE, payload: error });
  }
}

function* getPopularMoviesSaga() {
  try {
    yield put({ type: MovieActionTypes.GET_POPULAR_MOVIES_LOADING });
    const response = yield call(getPopularMoviesApi);
    if (response.status === 200) {
      yield put({ type: MovieActionTypes.GET_POPULAR_MOVIES_SUCCESS, payload: response.data.results });
    } else {
      yield put({ type: MovieActionTypes.GET_POPULAR_MOVIES_FAILURE, payload: response.data });
    }
  } catch (error) {
    yield put({ type: MovieActionTypes.GET_POPULAR_MOVIES_FAILURE, payload: error });
  }
}

function* getTopRatedMoviesSaga() {
  try {
    yield put({ type: MovieActionTypes.GET_TOP_RATED_MOVIES_LOADING });
    const response = yield call(getTopRatedMoviesApi);
    if (response.status === 200) {
      yield put({ type: MovieActionTypes.GET_TOP_RATED_MOVIES_SUCCESS, payload: response.data.results });
    } else {
      yield put({ type: MovieActionTypes.GET_TOP_RATED_MOVIES_FAILURE, payload: response.data });
    }
  } catch (error) {
    yield put({ type: MovieActionTypes.GET_TOP_RATED_MOVIES_FAILURE, payload: error });
  }
}

function* getUpcomingMoviesSaga() {
  try {
    yield put({ type: MovieActionTypes.GET_UPCOMING_MOVIES_LOADING });
    const response = yield call(getUpcomingMoviesApi);
    if (response.status === 200) {
      yield put({ type: MovieActionTypes.GET_UPCOMING_MOVIES_SUCCESS, payload: response.data.results });
    } else {
      yield put({ type: MovieActionTypes.GET_UPCOMING_MOVIES_FAILURE, payload: response.data });
    }
  } catch (error) {
    yield put({ type: MovieActionTypes.GET_UPCOMING_MOVIES_FAILURE, payload: error });
  }
}

function* getTrailerMovieSaga({ payload: movieId }) {
  try {
    yield put({ type: MovieActionTypes.GET_TRAILER_MOVIE_LOADING });
    const response = yield call(getTrailerMovieApi, movieId);
    if (response.status === 200) {
      const results = response.data.results;
      const trailer = results.find((item) => item.type === "Trailer") || results[0];
      yield put({ type: MovieActionTypes.GET_TRAILER_MOVIE_SUCCESS, payload: trailer });
    } else {
      yield put({ type: MovieActionTypes.GET_TRAILER_MOVIE_FAILURE, payload: response.data });
    }
  } catch (error) {
    yield put({ type: MovieActionTypes.GET_TRAILER_MOVIE_FAILURE, payload: error });
  }
}

function* watchNowPlayingMovies() {
  yield takeEvery(MovieActionTypes.GET_NOW_PLAYING_MOVIES, getNowPlayingMoviesSaga);
}
function* watchPopularMovies() {
  yield takeEvery(MovieActionTypes.GET_POPULAR_MOVIES, getPopularMoviesSaga);
}
function* watchTopRatedMovies() {
  yield takeEvery(MovieActionTypes.GET_TOP_RATED_MOVIES, getTopRatedMoviesSaga);
}
function* watchUpcomingMovies() {
  yield takeEvery(MovieActionTypes.GET_UPCOMING_MOVIES, getUpcomingMoviesSaga);
}
function* watchTrailerMovie() {
  yield takeEvery(MovieActionTypes.GET_TRAILER_MOVIE, getTrailerMovieSaga);
}

function* movieSaga() {
  yield all([
    fork(watchNowPlayingMovies),
    fork(watchPopularMovies),
    fork(watchTopRatedMovies),
    fork(watchUpcomingMovies),
    fork(watchTrailerMovie),
  ]);
}

export default movieSaga;
