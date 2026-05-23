import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularMoviesAction } from "../redux/movie/actions";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPopularMoviesAction());
    }, []);
};
export default usePopularMovies;
