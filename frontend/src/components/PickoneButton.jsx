import React, { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

const PickoneButton = () => {
  const { movies, setPickedMovie } = useMovieStore();
  const [rolling, setRolling] = useState(false);

  const handlePickOne = () => {
    if (!movies?.movies?.length) return;

    setRolling(true);

    // 🎲 Dice roll delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * movies.movies.length);

      const picked = movies.movies[randomIndex];
      setPickedMovie(picked);
      setRolling(false);

      // ✨ Auto-scroll
      setTimeout(() => {
        document
          .getElementById(`movie-${picked.id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });

        // 🎥 Open modal
        document.getElementById("pick_one_modal").showModal();
      }, 200);
    }, 1200);
  };

  return (
    <button
      onClick={handlePickOne}
      className="btn btn-primary"
      disabled={rolling}
    >
      {rolling ? "🎲 Rolling..." : "🎬 Pick One"}
    </button>
  );
};

export default PickoneButton;
