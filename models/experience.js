const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    batchYear: {
      type: Number,
      required: true
    },

    role: {
      type: String,
      required: true
    },

    roundsDescription: {
      type: String,
      required: true
    },

    questionsAsked: {
      type: String,
      required: true
    },

    tips: String,

    difficultyLevel: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium"
    },

    status: {
      type: String,
      enum: ["pending", "approved"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
