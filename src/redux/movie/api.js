import axios from "axios";
import {
  NOW_PLAYING_MOVIE,
  POPULAR_MOVIE,
  TOP_RATED_MOVIE,
  UPCOMING_MOVIE,
  MOVIE_VIDEOS_URL,
} from "../../constants/endpoint";
import { options } from "../../utils/constant";

export const getNowPlayingMoviesApi = () => axios.get(NOW_PLAYING_MOVIE, options);
export const getPopularMoviesApi = () => axios.get(POPULAR_MOVIE, options);
export const getTopRatedMoviesApi = () => axios.get(TOP_RATED_MOVIE, options);
export const getUpcomingMoviesApi = () => axios.get(UPCOMING_MOVIE, options);
export const getTrailerMovieApi = (movieId) =>
  axios.get(`${MOVIE_VIDEOS_URL}/${movieId}/videos`, options);
