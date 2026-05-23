import { MovieActionTypes } from "./constants";

const initialState = { data: null, loading: false, error: null };

export const nowPlayingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionTypes.GET_NOW_PLAYING_MOVIES_LOADING:
      return { ...state, loading: true, error: null };
    case MovieActionTypes.GET_NOW_PLAYING_MOVIES_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case MovieActionTypes.GET_NOW_PLAYING_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionTypes.GET_POPULAR_MOVIES_LOADING:
      return { ...state, loading: true, error: null };
    case MovieActionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case MovieActionTypes.GET_POPULAR_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topRatedMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionTypes.GET_TOP_RATED_MOVIES_LOADING:
      return { ...state, loading: true, error: null };
    case MovieActionTypes.GET_TOP_RATED_MOVIES_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case MovieActionTypes.GET_TOP_RATED_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const upcomingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionTypes.GET_UPCOMING_MOVIES_LOADING:
      return { ...state, loading: true, error: null };
    case MovieActionTypes.GET_UPCOMING_MOVIES_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case MovieActionTypes.GET_UPCOMING_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const trailerMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionTypes.GET_TRAILER_MOVIE_LOADING:
      return { ...state, loading: true, error: null };
    case MovieActionTypes.GET_TRAILER_MOVIE_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case MovieActionTypes.GET_TRAILER_MOVIE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const uiInitialState = { toggle: false, open: false, id: "" };

export const movieUIReducer = (state = uiInitialState, action) => {
  switch (action.type) {
    case MovieActionTypes.SET_TOGGLE:
      return { ...state, toggle: !state.toggle };
    case MovieActionTypes.SET_OPEN:
      return { ...state, open: action.payload };
    case MovieActionTypes.SET_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
