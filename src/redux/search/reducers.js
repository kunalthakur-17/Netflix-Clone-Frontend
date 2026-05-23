import { SearchActionTypes } from "./constants";

const initialState = { movieName: null, data: null, loading: false, error: null };

export const searchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_MOVIE_LOADING:
      return { ...state, loading: true, error: null };
    case SearchActionTypes.SEARCH_MOVIE_SUCCESS:
      return { ...state, movieName: action.payload.query, data: action.payload.movies, loading: false, error: null };
    case SearchActionTypes.SEARCH_MOVIE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SearchActionTypes.SEARCH_MOVIE_RESET:
      return initialState;
    default:
      return state;
  }
};
