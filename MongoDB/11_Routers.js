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
    const courses = await Course.find().select({
      _id: 0,
      name: 1,
      category: 1,
    });
    res.json(courses);
  } catch (err) {
    res.send("Error :-", err);
  }
});

coursesRouter.get("/createCourse", (req, res) => {
  res.sendFile(__dirname + "/11_AddCourse.html");
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
      res.json(nCourse);
    });
  } catch (err) {
    res.send("Error :-", err);
  }
});

module.exports = coursesRouter;
