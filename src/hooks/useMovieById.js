import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovieAction } from "../redux/movie/actions";
import { useEffect } from "react";

const useMovieById = async (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        const trailer = res?.data?.results?.find((item) => item.type === "Trailer") || res.data.results[0];
        dispatch(getTrailerMovieAction(trailer));
      } catch (error) {
        console.log(error);
      }
    }
    getMovieById();
  }, []);
}

export default useMovieById;
