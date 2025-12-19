import { fetchMoviesFromTMDB, fetchGenres, fetchLanguages } from "../services/tmdb.service.js";


export const getRandomMovies = async (req, res) => {
  try {
    const movies = await fetchMoviesFromTMDB(req.body);
    console.log('line 6 in controller')  // not executed
    if (!movies || movies.length === 0) {
      return res.status(404).json({ message: "No movies found from controller" });
    }

    // Shuffle movies
    const shuffled = movies.sort(() => 0.5 - Math.random());

    // Pick only 5 movies
    const selectedMovies = shuffled.slice(0, 5);

    res.status(200).json({
      count: selectedMovies.length,
      movies: selectedMovies,
    });
  } catch (error) {
    console.error("TMDB Error:", error.message);
    res.status(500).json({ message: "Failed to fetch movies from controller" });
  }
};


let genresCache = null;
let languagesCache = null;

export const getGenres = async (req, res) => {
  try {
    if (!genresCache) {
      genresCache = await fetchGenres();
    }
    res.status(200).json(genresCache);
  } catch (error) {
    console.error("Error fetching genres:", error.message);
    res.status(500).json({ message: "Failed to fetch genres" });
  }
};

export const getLanguages = async (req, res) => {
  try {
    if (!languagesCache) {
      languagesCache = await fetchLanguages();
    }
    res.status(200).json(languagesCache);
  } catch (error) {
    console.error("Error fetching languages:", error.message);
    res.status(500).json({ message: "Failed to fetch languages" });
  }
};
