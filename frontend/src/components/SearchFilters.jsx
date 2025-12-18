import React, { useState } from "react";

const SearchFilters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    genre: "any",
    yearFrom: 1990,
    yearTo: 2025,
    rating: 6,
    language: "any",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    console.log("Selected filters:", filters);
    onSearch?.(filters); // send to parent / backend
  };

  return (
    <div className="card bg-base-200 shadow-xl w-full max-w-md">
      <div className="card-body gap-4">
        <h2 className="card-title text-xl">🎲 Random Movie Picker</h2>

        {/* Genre */}
        <div>
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <select
            className="select select-bordered w-full"
            name="genre"
            value={filters.genre}
            onChange={handleChange}
          >
            <option value="any">Any</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
            <option value="27">Horror</option>
            <option value="10749">Romance</option>
            <option value="878">Sci-Fi</option>
          </select>
        </div>

        {/* Release Year */}
        <div>
          <label className="label">
            <span className="label-text">Release Year</span>
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              name="yearFrom"
              className="input input-bordered w-full"
              value={filters.yearFrom}
              onChange={handleChange}
            />
            <input
              type="number"
              name="yearTo"
              className="input input-bordered w-full"
              value={filters.yearTo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className="label">
            <span className="label-text">
              Minimum Rating: {filters.rating}+
            </span>
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            name="rating"
            value={filters.rating}
            onChange={handleChange}
            className="range range-primary"
          />
        </div>

        {/* Language */}
        <div>
          <label className="label">
            <span className="label-text">Language</span>
          </label>
          <select
            className="select select-bordered w-full"
            name="language"
            value={filters.language}
            onChange={handleChange}
          >
            <option value="any">Any</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ko">Korean</option>
            <option value="ja">Japanese</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="card-actions mt-4">
          <button
            className="btn btn-primary w-full text-lg"
            onClick={handleSearch}
          >
            Pick a Random Movie 🎥
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
