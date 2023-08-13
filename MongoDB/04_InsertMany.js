const { getDBConnection } = require("./00_utils");
const { Course, Student } = require("./02_Model");
getDBConnection();

const courseData = [
  { 
    name: "Node JS",
    category: "BackEnd",
  },
  { 
    name: "MongoDB",
    category: "BackEnd",
  },
  { 
    name: "Javascript",
    category: "ScriptingLanguage",
  },
  { 
    name: "React JS",
    category: "FrontEnd",
  },
  { 
    name: "Vue JS",
    category: "FrontEnd",
  },
];

Course.insertMany(courseData)
  .then((value) => console.log("Course data saved successfully! ...", value))
  .catch((error) => console.log("Failed...", error));

const studentData = [
  {
    name: "Sachin",
    enroll: 23,
    courseId: 1,
  },
  {
    name: "Rahul",
    enroll: 24,
    courseId: 1,
  },
  {
    name: "Anukur",
    enroll: 27,
    courseId: 3,
  },
  {
    name: "Shreyas",
    enroll: 28,
    courseId: 2,
  },
  {
    name: "Harshith",
    enroll: 29,
    courseId: 2,
  },
  {
    name: "Chethan",

    enroll: 30,
    courseId: 1,
  },
  {
    name: "Kunal",
    enroll: 31,
    courseId: 1,
  },
  {
    name: "Rajas",
    enroll: 32,
    courseId: 3,
  },
  {
    name: "Harry",
    enroll: 33,
    courseId: 2,
  },
];

// Student.insertMany(studentData)
//   .then((value) => console.log("Students data saved successfully! ...", value))
//   .catch((error) => console.log("Failed...", error));
