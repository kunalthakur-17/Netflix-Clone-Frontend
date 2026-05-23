import { useSelector } from 'react-redux';
import MovieList from './MovieList';

export default function MovieContainer() {
  const nowPlaying = useSelector(store => store.nowPlayingMoviesReducer?.data);
  const popular = useSelector(store => store.popularMoviesReducer?.data);
  const topRated = useSelector(store => store.topRatedMoviesReducer?.data);
  const upcoming = useSelector(store => store.upcomingMoviesReducer?.data);

  return (
    <div className='bg-black pb-8 -mt-36 relative z-10'>
      <MovieList title="Now Playing" movies={nowPlaying} />
      <MovieList title="Popular" movies={popular} />
      <MovieList title="Top Rated" movies={topRated} />
      <MovieList title="Upcoming" movies={upcoming} />
    </div>
  );
}
