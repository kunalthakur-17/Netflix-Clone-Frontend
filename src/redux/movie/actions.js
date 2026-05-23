import { MovieActionTypes } from "./constants";

export const getNowPlayingMoviesAction = () => ({
  type: MovieActionTypes.GET_NOW_PLAYING_MOVIES,
});

export const getPopularMoviesAction = () => ({
  type: MovieActionTypes.GET_POPULAR_MOVIES,
});

export const getTopRatedMoviesAction = () => ({
  type: MovieActionTypes.GET_TOP_RATED_MOVIES,
});

export const getUpcomingMoviesAction = () => ({
  type: MovieActionTypes.GET_UPCOMING_MOVIES,
});

export const getTrailerMovieAction = (movieId) => ({
  type: MovieActionTypes.GET_TRAILER_MOVIE,
  payload: movieId,
});

export const setToggleAction = () => ({
  type: MovieActionTypes.SET_TOGGLE,
});

export const setOpenAction = (data) => ({
  type: MovieActionTypes.SET_OPEN,
  payload: data,
});

export const setIdAction = (data) => ({
  type: MovieActionTypes.SET_ID,
  payload: data,
});
