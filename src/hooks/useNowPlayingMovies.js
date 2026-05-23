import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNowPlayingMoviesAction } from "../redux/movie/actions";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNowPlayingMoviesAction());
    }, []);
};
export default useNowPlayingMovies;
