const mongoose = require("mongoose");

const assignMentorSchema = new mongoose.Schema({
  MentorName: String,
  students: Array,
});

module.exports = mongoose.model(
  "assign-mentor",
  assignMentorSchema,
  "Assign-Mentors"
);
