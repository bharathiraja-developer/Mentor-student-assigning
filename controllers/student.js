const studentRouter = require("express").Router();
const student = require("../models/studentschema");

//endpoint to create mentor
studentRouter.post("/", (request, response) => {
  const Student = new student(request.body);
  Student.save().then(() => {
    response.json({ message: "Student created sucessfully" });
  });
});

module.exports = studentRouter;
