const express = require("express");
const app = express();
const coursesRouter = express.Router();
const { Course, Student } = require("./02_Model");
const { getDBConnection } = require("./00_utils");
getDBConnection();

// middleware that is specific to this router
coursesRouter.use((req, res, next) => {
  console.log("Time: ", new Date().toJSON().slice(0, 10));
  next();
});

coursesRouter.get("/", async (req, res) => {
  try {
    const selectQuery = { _id: 0, name: 1, category: 1 };
    // const courses = await Course.find().select({});
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.send("Error :-", err);
  }
});

coursesRouter.get("/deleteCourse/:id", (req, res) => {
  console.log("Delete course reached! :- ", req.params);
  const courseId = req.params.id;
  console.log("Delete course id :-  :- ", courseId);

  Course.findByIdAndRemove({ _id: courseId })
    .then((val) => {
      console.log("\nCourse data deleted successfully...", val);
      res.sendFile(__dirname + "/11_DisplayCourses.html");
    })
    .catch((err) => console.log("Deletion failed ...", err));
});

coursesRouter.get("/addCourse", (req, res) => {
  res.sendFile(__dirname + "/11_AddCourse.html");
});

coursesRouter.get("/displaycourses", (req, res) => {
  res.sendFile(__dirname + "/11_DisplayCourses.html");
});

coursesRouter.use(express.json()); //Middleware in Node JS
coursesRouter.use(express.urlencoded({ extended: true }));
coursesRouter.post("/", async (req, res) => {
  try {
    console.log("req.body :- ", req.body);

    //Validation..
    if (Object.keys(req.body).length === 0) {
      res.send("Unable to add movies as we received empty params");
      return;
    }
    const newCourse = new Course({
      name: req.body.name,
      category: req.body.category,
    });

    newCourse.save().then((nCourse) => {
      console.log("Course added successfully...", nCourse);
      res.sendFile(__dirname + "/11_DisplayCourses.html");
    });
  } catch (err) {
    res.send("Error :-", err);
  }
});

module.exports = coursesRouter;
