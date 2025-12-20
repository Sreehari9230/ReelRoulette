import React, { useEffect, useMemo, useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

const MAX_GENRES = 3;

const DEFAULT_FILTERS = {
  genres: [],
  yearFrom: 1990,
  yearTo: 2025,
  rating: 6,
  language: "any",
};

const SearchFilters = () => {
  const {
    fetchGenres,
    fetchLanguages,
    fetchMovies,
    genres,
    languages,
    isLanGenLoading,
  } = useMovieStore();

  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [languageSearch, setLanguageSearch] = useState("");

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    fetchGenres();
    fetchLanguages();
  }, [fetchGenres, fetchLanguages]);

  /* ================= UTILS ================= */
  const closeDropdown = () => {
    document.activeElement?.blur();
  };

  /* ================= GENRES ================= */
  const addGenre = (id) => {
    if (filters.genres.length >= MAX_GENRES) return;
    if (!filters.genres.includes(id)) {
      setFilters((prev) => ({
        ...prev,
        genres: [...prev.genres, id],
      }));
    }
    closeDropdown();
  };

  const removeGenre = (id) => {
    setFilters((prev) => ({
      ...prev,
      genres: prev.genres.filter((g) => g !== id),
    }));
  };

  /* ================= COMMON ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    fetchMovies(filters);
  };

  /* ================= LABEL HELPERS ================= */
  const genreLabel =
    filters.genres.length === 0
      ? "Any Genre"
      : `${filters.genres.length} selected`;

  const languageLabel =
    filters.language === "any"
      ? "Any Language"
      : languages.find((l) => l.iso_639_1 === filters.language)
          ?.english_name || "Any Language";

  /* ================= MEMOIZED VALUES ================= */
  const filteredLanguages = useMemo(() => {
    return languages.filter(
      (l) =>
        l.iso_639_1 &&
        l.english_name &&
        l.english_name
          .toLowerCase()
          .includes(languageSearch.toLowerCase())
    );
  }, [languages, languageSearch]);

  return (
    <div className="card bg-base-200 shadow-md w-full max-w-sm">
      <div className="card-body p-4 gap-3">
        <h2 className="card-title text-lg">🎲 Random Movie Picker</h2>

        {/* ================= GENRES ================= */}
        <div>
          <label className="label py-1">
            <span className="label-text text-sm">
              Genres (max {MAX_GENRES})
            </span>
          </label>

          {filters.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {filters.genres.map((id) => {
                const genre = genres.find((g) => g.id === id);
                return (
                  <span key={id} className="badge badge-primary gap-1">
                    {genre?.name}
                    <button onClick={() => removeGenre(id)}>✕</button>
                  </span>
                );
              })}
            </div>
          )}

          <div className="dropdown w-full">
            <button tabIndex={0} className="btn btn-outline btn-sm w-full">
              {genreLabel}
            </button>

            <div
              tabIndex={0}
              className="dropdown-content z-1 p-2 shadow bg-base-100 rounded-box w-full max-h-52 overflow-y-auto"
            >
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  className="btn btn-ghost btn-sm w-full justify-start"
                  disabled={
                    filters.genres.includes(genre.id) ||
                    filters.genres.length >= MAX_GENRES
                  }
                  onClick={() => addGenre(genre.id)}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= YEAR RANGE ================= */}
        <div>
          <label className="label py-1">
            <span className="label-text text-sm">Release Year</span>
          </label>

          <div className="flex gap-2">
            <input
              type="number"
              name="yearFrom"
              className="input input-bordered input-sm w-full"
              value={filters.yearFrom}
              onChange={handleChange}
            />
            <input
              type="number"
              name="yearTo"
              className="input input-bordered input-sm w-full"
              value={filters.yearTo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ================= RATING ================= */}
        <div>
          <label className="label py-1">
            <span className="label-text text-sm">
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
            className="range range-primary range-sm"
          />
        </div>

        {/* ================= LANGUAGE ================= */}
        <div>
          <label className="label py-1">
            <span className="label-text text-sm">Language</span>
          </label>

          <div className="dropdown w-full">
            <button tabIndex={0} className="btn btn-outline btn-sm w-full">
              {languageLabel}
            </button>

            <div
              tabIndex={0}
              className="dropdown-content z-1 p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-y-auto"
            >
              <input
                type="text"
                placeholder="Search language..."
                className="input input-bordered input-sm w-full mb-2"
                value={languageSearch}
                onChange={(e) => setLanguageSearch(e.target.value)}
              />

              <button
                className="btn btn-ghost btn-sm w-full justify-start"
                onClick={() => {
                  setFilters((prev) => ({ ...prev, language: "any" }));
                  setLanguageSearch("");
                  closeDropdown();
                }}
              >
                Any
              </button>

              {filteredLanguages.map((lang) => (
                <button
                  key={lang.iso_639_1}
                  className="btn btn-ghost btn-sm w-full justify-start"
                  onClick={() => {
                    setFilters((prev) => ({
                      ...prev,
                      language: lang.iso_639_1,
                    }));
                    setLanguageSearch("");
                    closeDropdown();
                  }}
                >
                  {lang.english_name}
                </button>
              ))}

              {filteredLanguages.length === 0 && (
                <p className="text-sm text-center opacity-60 mt-2">
                  No languages found
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ================= SEARCH ================= */}
        <button
          className="btn btn-primary btn-sm w-full mt-2"
          onClick={handleSearch}
          disabled={isLanGenLoading}
        >
          Pick a Random Movie 🎥
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
