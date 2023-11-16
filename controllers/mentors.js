const mentorRouter = require("express").Router();
const mentor = require("../models/mentorschema");

//endpoint to create mentor
mentorRouter.post("/", (request, response) => {
  const Mentor = new mentor(request.body);
  Mentor.save().then(() => {
    response.json({ message: "Mentor created sucessfully" });
  });
});

// endpoint to assign a student to a mentor
mentorRouter.get("/", (request, response) => {
  mentor.find({}, {}).then((mentors) => {
    response.json(mentors);
  });
});

module.exports = mentorRouter;
