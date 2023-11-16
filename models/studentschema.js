const mongoose = require("mongoose");

// define a schema
const studentSchema = new mongoose.Schema({
  studentId: Number,
  studentName: String,
  email: String,
  phone: Number,
});

module.exports = mongoose.model("Student", studentSchema, "Students");
