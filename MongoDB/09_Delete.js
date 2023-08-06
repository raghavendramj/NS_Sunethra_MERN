const { getDBConnection, fetchObjects } = require("./00_utils");
const { Course, Student } = require("./02_Model");
getDBConnection();

async function deleteOne(id) {
  Student.deleteOne({ _id: id })
    .then((val) => {
      console.log("deleteOne::Student data deleted successfully...", val);
      fetchObjects(Student, {});
    })
    .catch((err) => console.log("Deletion failed ...", err));
}

// deleteOne("64cfd63cdc7674d0f568cf03");

async function removeMany(courseIdPassed) {
  const whereClause = { courseId: courseIdPassed };
  const selectQuery = { _id: 0, name: 1, courseId: 1 };
  const students = await Student.find(whereClause).select(selectQuery);
  console.log("Found the object :- ", students);
  console.log("-----------------------------------------")

  Student.deleteMany(whereClause)
    .then((val) => {
      console.log("Student data deleted successfully...", val);
      fetchObjects(Student, {});
    })
    .catch((err) => console.log("Deletion failed ...", err));
}

// removeMany(1);  


async function findByIdAndRemoveStudent(id) {
    Student.findByIdAndRemove({ _id: id })
      .then((val) => {
        console.log("\n -----> findByIdAndRemoveStudent::Student data deleted successfully...", val);
        fetchObjects(Student, {});
      })
      .catch((err) => console.log("Deletion failed ...", err));
  }
  
  findByIdAndRemoveStudent("64cfd8100f2042b5dc760e82");