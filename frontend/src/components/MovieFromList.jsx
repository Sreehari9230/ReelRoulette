import React from "react";
import { useMovieStore } from "../store/useMovieStore";

const MovieFromList = () => {
  const { pickedMovie } = useMovieStore();

  if (!pickedMovie) return null;

  return (
    <dialog id="pick_one_modal" className="modal">
      <div className="modal-box p-0 overflow-hidden relative">
        {/* 🎥 Backdrop / Poster */}
        {pickedMovie.backdrop_path || pickedMovie.poster_path ? (
          <div className="relative h-64 w-full">
            <img
              src={`https://image.tmdb.org/t/p/w500${
                pickedMovie.backdrop_path || pickedMovie.poster_path
              }`}
              alt={pickedMovie.title}
              className="h-full w-full object-cover"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/20" />

            {/* Title on image */}
            <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
              🎬 {pickedMovie.title}
            </h3>
          </div>
        ) : null}

        {/* 📄 Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm opacity-80">
            {pickedMovie.overview || "No description available."}
          </p>

          <div className="flex gap-4 text-sm">
            <span>⭐ {pickedMovie.vote_average}</span>
            <span>📅 {pickedMovie.release_date}</span>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MovieFromList;

// modal to show one movie which is picked fromt eh list of the movies after clicking the button randomly pick one from the list
