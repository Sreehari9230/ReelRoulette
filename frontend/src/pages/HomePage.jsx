import React from "react";
import SearchFilters from "../components/SearchFilters";

const HomePage = () => {
  const ButtonClicked = () => {
    console.log("Clicked the button in the homePage");
  };
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-base-100 text-base-content">
    //   <SearchFilters />
    // </div>

    <div className="min-h-screen bg-base-100 text-base-content flex">
      {/* Left: Search Filters */}
      <div className="w-full max-w-sm border-r border-base-300 p-4">
        <SearchFilters />
      </div>

      {/* Right: Movie Result Area */}
      <div className="flex-1 flex items-center justify-center p-6">
        <p className="opacity-60 text-lg">
          🎬 Your random movie will appear here
        </p>
      </div>
    </div>
  );
};

export default HomePage;
