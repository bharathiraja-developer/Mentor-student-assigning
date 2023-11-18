const studentRouter = require("express").Router();
const student = require("../models/studentschema");

//endpoint to create student
studentRouter.post("/", (request, response) => {
  const Student = new student({ ...request.body, assignedMentor: "" });
  Student.save().then(() => {
    response.status(201).json({ message: "Student created sucessfully" });
  });
});

// show the previously assigned mentor for a particular student
studentRouter.get("/:id", (request, response) => {
  const id = request.params.id;
  student.findById(id).then((stud) => {
    response.status(200).json(stud.previousMentor);
  });
});

module.exports = studentRouter;
