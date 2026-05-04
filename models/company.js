// models/Company.js
const mongoose = require("mongoose");

const roundSchema = new mongoose.Schema({
  roundNumber: Number,
  roundName: String,
  description: String
});

const companySchema = new mongoose.Schema({
    companyImage: {
  type: String,
  required: true
},

  companyName: {
    type: String,
    required: true
  },

  shortDescription: {
    type: String,
    required: true
  },

  fullDescription: {
    type: String
  },

  eligibility: {
    branchAllowed: [String],
    minCGPA: Number
  },

  rounds: [roundSchema],

  totalRounds: Number,

  alumniPOC: {
    name: String,
    designation: String,
    email: String,
    linkedin: String,
    batch: String
  },

  visitYear: {
    type: Number
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Company", companySchema);
