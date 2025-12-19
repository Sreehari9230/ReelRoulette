// import "dotenv/config";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const TMDB_HEADERS = {
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
};
