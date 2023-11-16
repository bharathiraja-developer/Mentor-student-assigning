const express = require("express");
const app = express();
const cors = require("cors");
const mentorRouter = require("./controllers/mentors");
const studentRouter = require("./controllers/student");

app.use(cors());
app.use(express.json());

app.use("/api/mentors", mentorRouter);
app.use("/api/students", studentRouter);

module.exports = app;
