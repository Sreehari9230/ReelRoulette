import axios from "axios";
import { TMDB_BASE_URL, TMDB_HEADERS } from "../config/tmdb.js";

export const fetchMoviesFromTMDB = async (filters) => {
    const {
        genre,
        language,
        rating,
        yearFrom,
        yearTo,
    } = filters;

    const params = {
        include_adult: false,
        sort_by: "popularity.desc",
        "vote_average.gte": rating || 0,
        "primary_release_date.gte": yearFrom
            ? `${yearFrom}-01-01`
            : undefined,
        "primary_release_date.lte": yearTo
            ? `${yearTo}-12-31`
            : undefined,
    };

    // Handle "any"
    if (genre !== "any") params.with_genres = genre;
    if (language !== "any") params.with_original_language = language;

    console.log("from services line 29","params",params  ,"---", TMDB_HEADERS, "------",  TMDB_BASE_URL);

    // 1️⃣ First request → get total pages
    const firstRes = await axios.get(
        `${TMDB_BASE_URL}/discover/movie`,
        { headers: TMDB_HEADERS, params }
    );
    console.log("from services line 36");

    const totalPages = Math.min(firstRes.data.total_pages, 500); // TMDB limit

    // 2️⃣ Pick random page
    const randomPage = Math.floor(Math.random() * totalPages) + 1;

    // 3️⃣ Fetch random page
    const randomRes = await axios.get(
        `${TMDB_BASE_URL}/discover/movie`,
        {
            headers: TMDB_HEADERS,
            params: { ...params, page: randomPage },
        }
    );

    return randomRes.data.results;
};
