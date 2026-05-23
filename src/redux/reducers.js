import { combineReducers } from "redux";
import { loginReducer, logoutReducer, signupReducer } from "./auth/reducers";
import {
  nowPlayingMoviesReducer,
  popularMoviesReducer,
  topRatedMoviesReducer,
  upcomingMoviesReducer,
  trailerMovieReducer,
  movieUIReducer,
} from "./movie/reducers";
import { searchMovieReducer } from "./search/reducers";

export default combineReducers({
  loginReducer,
  logoutReducer,
  signupReducer,
  nowPlayingMoviesReducer,
  popularMoviesReducer,
  topRatedMoviesReducer,
  upcomingMoviesReducer,
  trailerMovieReducer,
  movieUIReducer,
  searchMovieReducer,
});
