import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import analyticsRoutes from "./routes/analytics.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/analytics", analyticsRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
