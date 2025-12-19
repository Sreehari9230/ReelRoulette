import express from "express";
import {
    getRandomMovies,
    getGenres,
    getLanguages,
} from "../controllers/movies.controller.js";

const router = express.Router();

// POST because filters/search come in body
router.post("/random", getRandomMovies);

// Get movie genres
router.get("/genres", getGenres);

// Get languages
router.get("/languages", getLanguages);

export default router;
