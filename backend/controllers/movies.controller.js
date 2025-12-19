import { fetchMoviesFromTMDB } from "../services/tmdb.service.js";

export const getRandomMovies = async (req, res) => {
  try {
    const filters = req.body;

    const data = await fetchMoviesFromTMDB(filters);

    if (!data.results || data.results.length === 0) {
      return res.status(404).json({
        message: "No movies found",
      });
    }

    return res.status(200).json({
      page: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
      movies: data.results,
    });
  } catch (error) {
    console.error("TMDB Error:", error.response?.data || error.message);

    res.status(500).json({
      message: "Failed to fetch movies",
    });
  }
};
