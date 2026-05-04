const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question:   { type: String, required: true },
  options:    { type: [String], required: true },
  answer:     { type: Number, required: true },
  category:   { type: String, enum: ["aptitude", "english", "cseCore"], required: true, index: true },
  difficulty: { type: String, enum: ["easy", "moderate", "hard"], required: true, index: true },
  bankIndex:  { type: Number, default: 0 } // index inside its (category,difficulty) bank
});

module.exports = mongoose.model("Question", questionSchema);
