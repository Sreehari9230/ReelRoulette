import express from "express";
import {
    getRandomMovies,
    getMovieById,
    getGenres,
    getLanguages,
} from "../controllers/movies.controller.js";

const router = express.Router();

// POST because filters/search come in body
router.post("/random", getRandomMovies);

// Movie details by ID
router.get("/:id", getMovieById);

// Get movie genres
router.get("/genres", getGenres);

// Get languages
router.get("/languages", getLanguages);

export default router;
