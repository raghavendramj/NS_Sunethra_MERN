const { getDBConnection } = require("./00_utils");
const { Student } = require("./02_Model");

getDBConnection();

async function createStudent(student) {
  console.log("Student creation status :- ", await student.save());
}

function createUtility() {
  const student1 = new Student({
    name: "Rahul",
    class: "Node JS",
    section: "A",
    age: 25,
  });

  createStudent(student1);
}

createUtility();
