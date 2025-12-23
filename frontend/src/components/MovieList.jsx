// import React from "react";
// import { useMovieStore } from "../store/useMovieStore";

// const MovieList = () => {
//   const { movies, setPickedMovie } = useMovieStore(); // ✅ add setter

//   // Empty / initial state
//   if (!movies || !movies.movies || movies.movies.length === 0) {
//     return (
//       <div className="w-full max-w-3xl flex items-center justify-center">
//         <div className="card bg-base-200 shadow-xl w-full p-8 text-center">
//           <p className="opacity-60 text-lg">
//             🎬 Your random movie will appear here
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const handleMovieClick = (movie) => {
//     setPickedMovie(movie);
//     document.getElementById("pick_one_modal")?.showModal();
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
//         {movies.movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="group relative cursor-pointer"
//             onClick={() => handleMovieClick(movie)} // ✅ CLICK
//           >
//             <div
//               id={`movie-${movie.id}`}
//               className="relative overflow-hidden rounded-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
//             >
//               <figure className="aspect-2/3 w-full relative">
//                 {movie.poster_path ? (
//                   <>
//                     <img
//                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                       alt={movie.title || movie.original_title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />

//                     <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </>
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center bg-base-300 text-sm opacity-50">
//                     No Poster
//                   </div>
//                 )}

//                 <div className="absolute top-2 right-2 badge badge-sm bg-black/70 text-white border-none backdrop-blur-sm">
//                   ⭐ {movie.vote_average?.toFixed(1)}
//                 </div>
//               </figure>

//               <div
//                 className="absolute inset-0 flex flex-col justify-end p-3
//                 bg-linear-to-t from-black/95 via-black/70 to-black/40
//                 opacity-0 group-hover:opacity-100
//                 transition-opacity duration-300"
//               >
//                 <h2 className="text-sm font-bold text-white line-clamp-2 mb-1">
//                   {movie.title || movie.original_title}
//                 </h2>
//                 <p className="text-xs text-white/70">
//                   {movie.original_language?.toUpperCase()}
//                   {movie.release_date &&
//                     ` • ${movie.release_date.split("-")[0]}`}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieList;

import React from "react";
import { useMovieStore } from "../store/useMovieStore";

const MovieList = () => {
  const { movies, setPickedMovie } = useMovieStore();

  if (!movies || !movies.movies || movies.movies.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto py-24 text-center">
        <p className="text-neutral-content/50 tracking-wide">
          Your random film will appear here
        </p>
      </div>
    );
  }

  const handleMovieClick = (movie) => {
    setPickedMovie(movie);
    document.getElementById("pick_one_modal")?.showModal();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
            className="group cursor-pointer"
          >
            <div className="relative">
              {/* Offset plane */}
              <div className="absolute inset-0 translate-x-1 translate-y-1 border border-neutral-700" />

              {/* Main card */}
              <div
                className="relative bg-base-100 border border-neutral-500
                transition-transform duration-300 ease-out
                group-hover:-translate-x-1 group-hover:-translate-y-1"
              >
                {/* Poster */}
                <figure className="relative aspect-2/3 overflow-hidden">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title || movie.original_title}
                      className="w-full h-full object-cover
                        transition-transform duration-300
                        group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-base-300 text-sm opacity-50">
                      No Poster
                    </div>
                  )}

                  {/* Rating badge (top) */}
                  <div
                    className="absolute top-2 right-2
                    border border-neutral-900 bg-base-100
                    text-[11px] px-2 py-2px
                    font-medium tabular-nums"
                  >
                    ★ {movie.vote_average?.toFixed(1)}
                  </div>
                </figure>

                {/* Title strip */}
                <div
                  className="border-t border-neutral-500 px-2 py-2
  text-[12px] font-medium leading-tight
  h-[38px] flex items-start justify-between gap-2"
                >
                  <p className="line-clamp-2 flex-1">
                    {movie.title || movie.original_title}
                  </p>

                  {movie.release_date && (
                    <span className="text-[11px] opacity-60 tabular-nums whitespace-nowrap">
                      {movie.release_date.split("-")[0]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
