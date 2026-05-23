import axios from "axios";
import { getNowPlayingMoviesAction } from "../redux/movie/actions";
import { Now_Playing_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlayingMoviesAction(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useNowPlayingMovies;
