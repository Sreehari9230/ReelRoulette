import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true
  },
  value: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Analytics", analyticsSchema);
