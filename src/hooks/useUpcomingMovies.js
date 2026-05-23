import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUpcomingMoviesAction } from "../redux/movie/actions";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpcomingMoviesAction());
    }, []);
};
export default useUpcomingMovies;
