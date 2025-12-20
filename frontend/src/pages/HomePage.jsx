import React from "react";
import SearchFilters from "../components/SearchFilters";
import MovieList from "../components/MovieList";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-base-100 text-base-content
                    flex flex-col items-center
                    px-4 py-6 gap-8"
    >
      {/* Filters */}
      <SearchFilters />

      {/* Movie Result */}
      <MovieList />
    </div>
  );
};

export default HomePage;
