import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchMovieAction } from '../redux/search/actions';
import MovieList from './MovieList';

const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();
    const { movieName, data: searchedMovie, loading: isLoading } = useSelector(store => store.searchMovieReducer);
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(searchMovieAction(searchMovie));
        setSearchMovie("");
    }

    return (
        <>
            <div className='flex justify-center pt-[10%] w-[100%]'>
                <form onSubmit={submitHandler} className='w-[50%]'>
                    <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
                        <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='w-full outline-none rounded-md text-lg' type="text" placeholder='Search Movies...' />
                        <button className='bg-red-800 text-white rounded-md px-4 py-2'>{isLoading ? "loading..." : "Search"}</button>
                    </div>
                </form>

            </div>
            {
                searchedMovie ? ( <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
            }
           
        </>

    )
}

export default SearchMovie