import React, { useEffect, useState } from "react";
import SearchFilters from "../components/SearchFilters";
import MovieList from "../components/MovieList";
import DiceLoader from "../components/DiceLoader";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Example: simulate API loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-base-100 text-base-content
                    flex flex-col items-center
                    px-4 py-6 gap-8"
    >
      {isLoading && <DiceLoader />}

      {/* Filters */}
      <SearchFilters />

      {/* Movie Result */}
      <MovieList />
    </div>
  );
};

export default HomePage;
