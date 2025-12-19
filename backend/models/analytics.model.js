import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
      unique: true, // ✅ prevents duplicate users
    },

    userAgent: {
      type: String, // optional: browser/device info
    },

    firstVisit: {
      type: Date,
      default: Date.now,
    },

    lastVisit: {
      type: Date,
      default: Date.now,
    },

    visitCount: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Analytics", analyticsSchema);
