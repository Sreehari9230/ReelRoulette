import express from "express";
import { saveAnalytics, getAnalytics } from "../controllers/analytics.controller.js";

const router = express.Router();

// POST -> save analytics
router.post("/", saveAnalytics);

// GET -> fetch analytics
router.get("/", getAnalytics);

export default router;
