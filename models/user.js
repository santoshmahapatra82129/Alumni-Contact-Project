const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ["student", "alumni"],
    default: "student",
    required: true
  },
  fullName: { type: String },
  branch: { type: String },
  batchYear: { type: Number },
  // Student-specific
  cgpa: { type: Number },
  // Alumni-specific
  company: { type: String },
  designation: { type: String },
  linkedin: { type: String },
  bio: { type: String },
  // Profile photo (path under /public, e.g. "/uploads/avatars/abc123.jpg")
  photo: { type: String, default: "" }
});

// Apply plugin correctly
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("User", UserSchema);



