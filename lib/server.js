const StudentController = require("./../lib/controllers/StudentController");
const express = require("express");

// app details
const app = express();
app.use(express.json());
const port = 3000;

// endpoints

// Initial endpoint
app.get("/", (req, res) => {

    res.send("Welcome to the Visual Thinking API");
});

// Get all students endpoint
app.get("/v1/students", (req, res) => {

    const allStudents = StudentController.getStudents();
    res.json(allStudents);
});

// Get the certified students email endpoint
app.get("/v1/students/emails", (req, res) => {

    const emails = StudentController.getCertifiedStudentEmails();

    res.json(emails);
});

// Get the student names with more than 500 credits endpoint
app.get("/v1/students/credits", (req, res) => {

    const studentNames = StudentController.getStudents500();

    res.json(studentNames);
});

// initialize the app
app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});