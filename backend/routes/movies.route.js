// import express from "express";
// import { saveAnalytics, getAnalytics } from "../controllers/movies.controller.js";

// const router = express.Router();

// // POST -> save analytics
// router.post("/", saveAnalytics);

// // GET -> fetch analytics
// router.get("/", getAnalytics);

// export default router;


import express from "express";
import { getRandomMovies } from "../controllers/movies.controller.js";

const router = express.Router();

// POST because filters/search come in body
router.post("/random", getRandomMovies);

export default router;
