import axios from "axios";
import { SEARCH_MOVIE_URL } from "../../constants/endpoint";
import { options } from "../../utils/constant";

export const searchMovieApi = (query) =>
  axios.get(`${SEARCH_MOVIE_URL}${encodeURIComponent(query)}`, options);
