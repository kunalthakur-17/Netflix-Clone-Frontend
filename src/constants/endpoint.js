const baseurl = `${import.meta.env.VITE_APP_API_URL}/api/v1/users`;

export const LOGIN = `${baseurl}/login`;
export const LOGOUT = `${baseurl}/logout`;
export const REGISTER = `${baseurl}/register`;

const TMDB_BASE = "https://api.themoviedb.org/3/movie";
export const NOW_PLAYING_MOVIE = `${TMDB_BASE}/now_playing`;
export const POPULAR_MOVIE = `${TMDB_BASE}/popular`;
export const TOP_RATED_MOVIE = `${TMDB_BASE}/top_rated`;
export const UPCOMING_MOVIE = `${TMDB_BASE}/upcoming`;
export const MOVIE_VIDEOS_URL = `${TMDB_BASE}`;
export const MOVIE_DETAIL_URL = `${TMDB_BASE}`;
export const MOVIE_CREDITS_URL = `${TMDB_BASE}`;
export const MOVIE_SIMILAR_URL = `${TMDB_BASE}`;
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const TMDB_IMG_SMALL = "https://image.tmdb.org/t/p/w185";

export const GET_PRODUCTS = "/api/v1/products";
export const GET_PRODUCT_BY_ID = "/api/v1/products";
