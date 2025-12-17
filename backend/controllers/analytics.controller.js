import Analytics from "../models/analytics.model.js";

// Save analytics
export const saveAnalytics = async (req, res) => {
  try {
    const analytics = new Analytics(req.body);
    await analytics.save();
    res.status(201).json({ message: "Analytics saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save analytics" });
  }
};

// Get all analytics
export const getAnalytics = async (req, res) => {
  try {
    const data = await Analytics.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
};
