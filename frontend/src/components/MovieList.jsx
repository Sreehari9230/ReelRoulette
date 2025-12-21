import React from "react";
import { useMovieStore } from "../store/useMovieStore";

const MovieList = () => {
  const { movies, setPickedMovie } = useMovieStore(); // ✅ add setter

  // Empty / initial state
  if (!movies || !movies.movies || movies.movies.length === 0) {
    return (
      <div className="w-full max-w-3xl flex items-center justify-center">
        <div className="card bg-base-200 shadow-xl w-full p-8 text-center">
          <p className="opacity-60 text-lg">
            🎬 Your random movie will appear here
          </p>
        </div>
      </div>
    );
  }

  const handleMovieClick = (movie) => {
    setPickedMovie(movie);
    document.getElementById("pick_one_modal")?.showModal();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {movies.movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative cursor-pointer"
            onClick={() => handleMovieClick(movie)} // ✅ CLICK
          >
            <div
              id={`movie-${movie.id}`}
              className="relative overflow-hidden rounded-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
            >
              <figure className="aspect-2/3 w-full relative">
                {movie.poster_path ? (
                  <>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title || movie.original_title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-base-300 text-sm opacity-50">
                    No Poster
                  </div>
                )}

                <div className="absolute top-2 right-2 badge badge-sm bg-black/70 text-white border-none backdrop-blur-sm">
                  ⭐ {movie.vote_average?.toFixed(1)}
                </div>
              </figure>

              <div
                className="absolute inset-0 flex flex-col justify-end p-3
                bg-linear-to-t from-black/95 via-black/70 to-black/40
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300"
              >
                <h2 className="text-sm font-bold text-white line-clamp-2 mb-1">
                  {movie.title || movie.original_title}
                </h2>
                <p className="text-xs text-white/70">
                  {movie.original_language?.toUpperCase()}
                  {movie.release_date &&
                    ` • ${movie.release_date.split("-")[0]}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
