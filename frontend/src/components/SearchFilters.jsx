import React, { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

const GENRES = [
  { id: "28", name: "Action" },
  { id: "35", name: "Comedy" },
  { id: "18", name: "Drama" },
  { id: "27", name: "Horror" },
  { id: "10749", name: "Romance" },
  { id: "878", name: "Sci-Fi" },
];

const SearchFilters = () => {
  const { fetchMovies } = useMovieStore();

  const [filters, setFilters] = useState({
    genres: [],
    yearFrom: 1990,
    yearTo: 2025,
    rating: 6,
    language: "any",
  });

  const handleGenreAdd = (genreId) => {
    if (filters.genres.includes(genreId)) return;

    setFilters({
      ...filters,
      genres: [...filters.genres, genreId],
    });
  };

  const handleGenreRemove = (genreId) => {
    setFilters({
      ...filters,
      genres: filters.genres.filter((g) => g !== genreId),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    console.log("Selected filters:", filters);
    fetchMovies(filters);
  };

  return (
    <div className="card bg-base-200 shadow-xl w-full max-w-md">
      <div className="card-body gap-4">
        <h2 className="card-title text-xl">🎲 Random Movie Picker</h2>

        {/* Genres */}
        <div>
          <label className="label">
            <span className="label-text">Genres</span>
          </label>

          {/* Selected genres (chips) */}
          <div className="flex flex-wrap gap-2 mb-2">
            {filters.genres.map((genreId) => {
              const genre = GENRES.find((g) => g.id === genreId);
              return (
                <span key={genreId} className="badge badge-primary gap-2">
                  {genre?.name}
                  <button
                    className="ml-1"
                    onClick={() => handleGenreRemove(genreId)}
                  >
                    ✕
                  </button>
                </span>
              );
            })}
          </div>

          {/* Dropdown */}
          <select
            className="select select-bordered w-full"
            onChange={(e) => handleGenreAdd(e.target.value)}
            value=""
          >
            <option value="" disabled>
              Select a genre
            </option>
            {GENRES.map((genre) => (
              <option
                key={genre.id}
                value={genre.id}
                disabled={filters.genres.includes(genre.id)}
              >
                {genre.name}
              </option>
            ))}
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

        {/* Language (single select stays same) */}
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

        {/* Search */}
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
