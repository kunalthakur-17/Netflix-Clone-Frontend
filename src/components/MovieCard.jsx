import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TMDB_IMG_URL } from '../utils/constant';

const MovieCard = ({ posterPath, movieId }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  if (!posterPath) return null;

  return (
    <div
      className='relative w-48 pr-2 cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10'
      onClick={() => navigate(`/movie/${movieId}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`${TMDB_IMG_URL}/${posterPath}`}
        alt="movie-poster"
        className='w-full rounded-md'
      />
      {hovered && (
        <div className='absolute inset-0 mr-2 rounded-md bg-black/50 flex flex-col items-center justify-center gap-2'>
          <div className='bg-white rounded-full p-3'>
            <svg className='w-6 h-6 text-black fill-black' viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z' />
            </svg>
          </div>
          <span className='text-white text-xs font-semibold'>Watch Now</span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
