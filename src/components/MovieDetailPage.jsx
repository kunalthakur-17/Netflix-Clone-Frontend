import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TMDB_IMG_URL, options } from "../utils/constant";

const TMDB_BASE = "https://api.themoviedb.org/3/movie";

export default function MovieDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDetails = async () => {
      try {
        const [detailRes, videoRes] = await Promise.all([
          axios.get(`${TMDB_BASE}/${id}`, options),
          axios.get(`${TMDB_BASE}/${id}/videos`, options),
        ]);
        setMovie(detailRes.data);
        const trailerVideo =
          videoRes.data.results.find((v) => v.type === "Trailer") ||
          videoRes.data.results[0];
        setTrailer(trailerVideo);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDetails();
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl animate-pulse">Loading...</div>
      </div>
    );
  }

  const hours = Math.floor(movie.runtime / 60);
  const mins = movie.runtime % 60;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Back Button - inside right panel top */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 z-50 bg-black/70 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition hidden"
      >
        ← Back
      </button>

      {/* Main Split Layout */}
      <div className="flex flex-col md:flex-row min-h-screen">

        {/* LEFT HALF — Movie Poster / Trailer on play */}
        <div className="w-full md:w-1/2 relative overflow-hidden bg-black" style={{ minHeight: "100vh" }}>

          {/* Poster Image */}
          {!isPlaying && (
            <img
              src={`${TMDB_IMG_URL}/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
              style={{ position: "absolute", inset: 0 }}
            />
          )}

          {/* Trailer iframe when playing */}
          {isPlaying && trailer && (
            <>
              <iframe
                className="w-full h-full"
                style={{ position: "absolute", inset: 0 }}
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1&loop=1&playlist=${trailer.key}`}
                title="trailer"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
              {/* Close button BELOW iframe, outside it */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 z-20 bg-gradient-to-t from-black/80 to-transparent pt-8">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="bg-red-700 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-full transition"
                >
                  ✕ Close Trailer
                </button>
              </div>
            </>
          )}

          {/* Dark overlay when not playing */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/30" />
          )}

          {/* Play Button */}
          {!isPlaying && trailer && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 group"
            >
              <div className="bg-white/90 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 rounded-full p-5 shadow-2xl">
                <svg className="w-12 h-12 fill-black group-hover:fill-white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white text-sm font-semibold bg-black/50 px-4 py-1 rounded-full">
                ▶ Play Trailer
              </span>
            </button>
          )}
        </div>

        {/* RIGHT HALF — Movie Details */}
        <div className="w-full md:w-1/2 bg-zinc-900 flex flex-col justify-center px-10 py-16 overflow-y-auto">

          {/* Title */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 self-start bg-zinc-700 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition"
          >
            ← Back
          </button>
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

          {/* Tagline */}
          {movie.tagline && (
            <p className="text-red-400 italic text-base mb-6">"{movie.tagline}"</p>
          )}

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
            <span className="bg-green-600 text-white px-2 py-0.5 rounded font-semibold">
              ⭐ {movie.vote_average?.toFixed(1)} / 10
            </span>
            <span className="text-gray-400">{movie.vote_count?.toLocaleString()} votes</span>
            <span className="text-gray-300">{movie.release_date?.split("-")[0]}</span>
            {movie.runtime > 0 && (
              <span className="text-gray-300">{hours}h {mins}m</span>
            )}
            <span className="border border-gray-500 px-2 py-0.5 rounded text-xs uppercase text-gray-400">
              {movie.original_language}
            </span>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h2 className="text-gray-400 text-xs uppercase tracking-widest mb-2">Overview</h2>
            <p className="text-gray-200 text-base leading-relaxed">{movie.overview}</p>
          </div>

          {/* Genres */}
          {movie.genres?.length > 0 && (
            <div className="mb-5">
              <h2 className="text-gray-400 text-xs uppercase tracking-widest mb-2">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((g) => (
                  <span key={g.id} className="bg-zinc-700 text-white text-xs px-3 py-1 rounded-full">
                    {g.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Status & Release */}
          <div className="mb-5 flex gap-8">
            {movie.status && (
              <div>
                <h2 className="text-gray-400 text-xs uppercase tracking-widest mb-1">Status</h2>
                <p className="text-white text-sm">{movie.status}</p>
              </div>
            )}
            {movie.release_date && (
              <div>
                <h2 className="text-gray-400 text-xs uppercase tracking-widest mb-1">Release Date</h2>
                <p className="text-white text-sm">{movie.release_date}</p>
              </div>
            )}
            {movie.budget > 0 && (
              <div>
                <h2 className="text-gray-400 text-xs uppercase tracking-widest mb-1">Budget</h2>
                <p className="text-white text-sm">${movie.budget?.toLocaleString()}</p>
              </div>
            )}
          </div>

          {/* Production Companies */}
          {movie.production_companies?.length > 0 && (
            <div className="mb-5">
              <h2 className="text-gray-400 text-xs uppercase tracking-widest mb-2">Production</h2>
              <p className="text-gray-300 text-sm">
                {movie.production_companies.map((c) => c.name).join(" · ")}
              </p>
            </div>
          )}

          {/* Watch Trailer Button */}
          {trailer && (
            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold w-fit transition"
            >
              ▶ Watch Trailer on YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
