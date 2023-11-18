const assignRouter = require("express").Router();
const assignMentor = require("../models/assingMentorSchema");
const mentors = require("../models/mentorschema");
const students = require("../models/studentschema");
const studentRouter = require("./student");

// assign students for a mentor
assignRouter.post("/:id", (request, response) => {
  const id = request.params.id;
  mentors.findById(id).then(async (mentor) => {
    let mentorStudents = new Array();
    let student = await students.find({}, {});
    let i = 1;
    student.forEach(async (eachone) => {
      if (i < 7 && eachone.assignedMentor === "") {
        i++;
        mentorStudents.push(eachone);
        let id = String(eachone._id);
        await students.findByIdAndUpdate(id, {
          studentId: eachone.studentId,
          studentName: eachone.studentName,
          email: eachone.email,
          phone: eachone.phone,
          previousMentor: eachone.previousMentor,
          assignedMentor: mentor.mentorName,
        });
      }
    });

    const assignMentors = new assignMentor({
      MentorName: mentor.mentorName,
      students: mentorStudents,
    });
    assignMentors
      .save()
      .then(() => {
        response.status(201).json({
          message: `Assigning students for ${mentor.mentorName} is sucessfully completed`,
        });
      })
      .catch((err) => {
        response.status(404).json({ message: "invalid id" });
      });
  });
});

// change mentor for a particular student
studentRouter.patch("/:Studentid/:mentorId", (request, response) => {
  const stuId = request.params.Studentid;
  const menID = request.params.mentorId;
  mentors.findById(menID).then((mentor) => {
    students.findById(stuId).then((student) => {
      const updateMentor = {
        ...request.body,
        assignedMentor: mentor.mentorName,
        previousMentor: [...student.previousMentor, student.assignedMentor],
      };
      students
        .findByIdAndUpdate(stuId, updateMentor)
        .then(() => {
          response.json({ message: "Update mentor sucessfully" });
        })
        .catch((err) => {
          response.status(404).json({ message: "invalid id" });
        });
    });
  });
});

// to show all students for a particular mentor
assignRouter.get("/:id", (request, response) => {
  const id = request.params.id;
  assignMentor.findById(id).then((detail) => {
    response.status(200).json(detail.students);
  });
});

module.exports = assignRouter;
