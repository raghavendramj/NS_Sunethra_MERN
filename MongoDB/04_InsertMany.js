const { getDBConnection } = require("./00_utils");
const { Course } = require("./02_Model");
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
.then((value) =>
  console.log("Course data saved successfully! ...", value)
)
.catch((error) =>
  console.log("Failed...", error)
);
