import React from "react";

const MovieList = () => {
  return (
    <div className="w-full max-w-3xl flex items-center justify-center">
      <div className="card bg-base-200 shadow-xl w-full p-8 text-center">
        <p className="opacity-60 text-lg">
          🎬 Your random movie will appear here
        </p>
      </div>
    </div>
  );
};

export default MovieList;

// list of movies comes after seching with filters
