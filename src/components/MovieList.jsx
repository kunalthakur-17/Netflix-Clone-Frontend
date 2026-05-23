import MovieCard from './MovieCard';
import { MovieCardSkeleton } from './Skeletons';

const MovieList = ({ title, movies, searchMovie = false }) => {
  const isLoading = !movies;

  return (
    <div className='px-8 mb-4'>
      <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl py-3`}>{title}</h1>
      <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <MovieCardSkeleton key={i} />)
            : movies.map((movie) => (
                <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
