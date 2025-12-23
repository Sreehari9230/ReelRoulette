// import React, { useState } from "react";
// import { useMovieStore } from "../store/useMovieStore";

// const PickoneButton = () => {
//   const { movies, setPickedMovie } = useMovieStore();
//   const [rolling, setRolling] = useState(false);

//   const handlePickOne = () => {
//     if (!movies?.movies?.length) return;

//     setRolling(true);

//     // 🎲 Dice roll delay
//     setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * movies.movies.length);

//       const picked = movies.movies[randomIndex];
//       setPickedMovie(picked);
//       setRolling(false);

//       // ✨ Auto-scroll
//       setTimeout(() => {
//         document
//           .getElementById(`movie-${picked.id}`)
//           ?.scrollIntoView({ behavior: "smooth", block: "center" });

//         // 🎥 Open modal
//         document.getElementById("pick_one_modal").showModal();
//       }, 200);
//     }, 1200);
//   };

//   return (
//     <button
//       onClick={handlePickOne}
//       className="btn btn-primary"
//       disabled={rolling}
//     >
//       {rolling ? "🎲 Rolling..." : "🎬 Pick One"}
//     </button>
//   );
// };

// export default PickoneButton;

import React, { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

const PickoneButton = () => {
  const { movies, setPickedMovie } = useMovieStore();
  const [rolling, setRolling] = useState(false);

  const handlePickOne = () => {
    if (!movies?.movies?.length) return;

    setRolling(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * movies.movies.length);
      const picked = movies.movies[randomIndex];

      setPickedMovie(picked);
      setRolling(false);

      setTimeout(() => {
        document
          .getElementById(`movie-${picked.id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });

        document.getElementById("pick_one_modal")?.showModal();
      }, 200);
    }, 1200);
  };

  return (
    <button
      onClick={handlePickOne}
      disabled={rolling}
      className={`
        w-full sm:w-auto
        border border-neutral-900
        px-6 py-2
        text-sm font-semibold tracking-widest uppercase
        transition-all duration-200
        ${
          rolling
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-neutral-900 hover:text-white active:translate-y-1px"
        }
      `}
    >
      {rolling ? "Rolling…" : "Pick a movie"}
    </button>
  );
};

export default PickoneButton;
