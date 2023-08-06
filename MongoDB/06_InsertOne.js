const { getDBConnection } = require("./00_utils");
const { Student } = require("./02_Model");
getDBConnection();

function deleteAndCreate() {
  const data1 = {
    name: "Pranav",
    enroll: 27,
    courseId: 1,
  };

  deleteOne(data1);
  insertOne(data1);
}

async function insertOne() {
  Student.create(data1)
    .then((val) => console.log("Student data inserted successfully...", val))
    .catch((err) => console.log("Deletion failed ...", err));
}

async function deleteOne(data) {
  Student.deleteOne(data1)
    .then((val) => console.log("Student data deleted successfully...", val))
    .catch((err) => console.log("Insertion failed ...", err));
}

insertOne();

async function fetchStudents() {
  const selectQuery = { _id: 0, name: 1, courseId: 1 };
  const students = await Student.find({}).select(selectQuery);
  console.log("Students fetched ->", students);
}

fetchStudents();
