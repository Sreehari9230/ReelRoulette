import React from "react";
import { useMovieStore } from "../store/useMovieStore";

const PickoneButton = () => {
  const { movies } = useMovieStore();

  const handlePickOne = () => {
    if (!movies || !movies.movies || movies.movies.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * movies.movies.length);

    const pickedMovie = movies.movies[randomIndex];

    console.log("Picked movie:", pickedMovie);

    // for now simple feedback
    alert(`🎬 I think you should watch: ${pickedMovie.title}`);
  };

  return (
    <button
      onClick={handlePickOne}
      className="btn btn-primary flex items-center gap-2"
    >
      🎲 Pick One
    </button>
  );
};

export default PickoneButton;

// button called pick one which will randomly pick a movie from the list below
