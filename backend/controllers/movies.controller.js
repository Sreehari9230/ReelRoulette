import { fetchMoviesFromTMDB } from "../services/tmdb.service.js";

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
