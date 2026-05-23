import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrailerMovieAction } from "../redux/movie/actions";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (movieId) dispatch(getTrailerMovieAction(movieId));
  }, [movieId]);
};

export default useMovieById;
