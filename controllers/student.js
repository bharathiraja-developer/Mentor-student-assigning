const studentRouter = require("express").Router();
const student = require("../models/studentschema");

//endpoint to create student
studentRouter.post("/", (request, response) => {
  const Student = new student({ ...request.body, assignedMentor: "" });
  Student.save().then(() => {
    response.json({ message: "Student created sucessfully" });
  });
});

module.exports = studentRouter;
