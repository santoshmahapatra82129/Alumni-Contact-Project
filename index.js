// seed.js
const mongoose = require("mongoose");
const Company = require("./models/company");
const Question = require("./models/question");
const companies = require("./data");
const questions = require("./question");

async function seedDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/alumni");
  await Company.deleteMany({});
  await Company.insertMany(companies);

 await Question.deleteMany({});
  await Question.insertMany(questions);

  console.log("Database seeded!");
  mongoose.connection.close();
}

seedDB();
