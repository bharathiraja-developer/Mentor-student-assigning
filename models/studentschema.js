const mongoose = require("mongoose");

// define a schema
const studentSchema = new mongoose.Schema({
  studentId: Number,
  studentName: String,
  email: String,
  phone: Number,
  assignedMentor: String,
  previousMentor: Array,
});

module.exports = mongoose.model("Student", studentSchema, "Students");
