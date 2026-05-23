const baseurl = "/api/v1/users";

export const LOGIN = `${baseurl}/login`;
export const LOGOUT = `${baseurl}/logout`;
export const REGISTER = `${baseurl}/register`;

const TMDB_BASE = "https://api.themoviedb.org/3/movie";
export const NOW_PLAYING_MOVIE = `${TMDB_BASE}/now_playing`;
export const POPULAR_MOVIE = `${TMDB_BASE}/popular`;
export const TOP_RATED_MOVIE = `${TMDB_BASE}/top_rated`;
export const UPCOMING_MOVIE = `${TMDB_BASE}/upcoming`;
export const MOVIE_VIDEOS_URL = `${TMDB_BASE}`;
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";
