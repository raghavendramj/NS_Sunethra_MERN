const { getDBConnection } = require("./00_utils");
const { Course } = require("./02_Model");
getDBConnection();

async function updateByFindByAndUpdate(id) {
  //Find the object by Id
  const course = await Course.findById(id);
  console.log("Found the object :- ", course);

  if (!course) {
    console.log("No Course found!");
  }

  //Modify -> appraoch -01
  course.name = "Mogo-DB";
  course.category = "Back-End";

  //Modify -> appraoch -02
  course.set({
    name: "Mogo-DB",
    category: "Back-End",
  });

  //write back to the database.
  const result = await course.save();
  console.log("Update result :- ", result);
}

updateByFindByAndUpdate(2);

async function updateOne(id) {
  //Find the object by Id
  const course = await Course.findById(id);
  console.log("updateOne-Found the object :- ", course);

  const updatedCourse = await Course.updateOne(
    { _id: id },
    {
      $set: {
        name: "Java-Script",
        category: "Scripting-Language",
      },
    }
  );
  console.log("updateOne- Updated course :- ", updatedCourse);
}

updateOne(3);

async function findByIdAndUpdate(id) {
  //Find the object by Id
  const course = await Course.findById(id);
  console.log("findByIdAndUpdate-Found the object :- ", course);

  const updatedCourse = await Course.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name: "React-JS",
        category: "Front-End",
      },
    },
    { new: true } //Returns the modified data, without this you will get original data
  );
  console.log("findByIdAndUpdate- Updated course :- ", updatedCourse);
}

findByIdAndUpdate(4);
