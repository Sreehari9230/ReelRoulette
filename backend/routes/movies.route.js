import express from "express";
import { getRandomMovies } from "../controllers/movies.controller.js";

const router = express.Router();

// POST because filters/search come in body
router.post("/random", getRandomMovies);

export default router;
