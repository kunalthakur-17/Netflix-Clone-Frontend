import axios from "axios";
import { getUpcomingMoviesAction } from "../redux/movie/actions";
import { Upcoming_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMoviesAction(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useUpcomingMovies;
