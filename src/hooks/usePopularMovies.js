import axios from "axios";
import { Popular_Movie, options } from "../utils/constant";
import { getPopularMoviesAction } from "../redux/movie/actions";
import { useDispatch } from "react-redux";

const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMoviesAction(res.data.results));
    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovies;
