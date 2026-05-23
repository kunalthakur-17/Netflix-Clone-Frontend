import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTopRatedMoviesAction } from "../redux/movie/actions";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopRatedMoviesAction());
    }, []);
};
export default useTopRatedMovies;
