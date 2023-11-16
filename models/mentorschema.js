const mongoose = require("mongoose");

// define a schema
const mentorSchema = new mongoose.Schema({
  mentorId: Number,
  mentorName: String,
  email: String,
  phone: Number,
});

module.exports = mongoose.model("Mentor", mentorSchema, "Mentors");
