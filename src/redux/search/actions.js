import { SearchActionTypes } from "./constants";

export const searchMovieAction = (query) => ({
  type: SearchActionTypes.SEARCH_MOVIE,
  payload: query,
});

export const searchMovieResetAction = () => ({
  type: SearchActionTypes.SEARCH_MOVIE_RESET,
});
