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

//Get Method  -> Courses
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

//Get Method  -> Course by ID
coursesRouter.get("/:id", async (req, res) => {
  console.log("Get course by Id reached! :- ", req.params);
  const courseId = req.params.id;
  console.log("Get course course id :-  :- ", courseId);
  const findQueryEq = { _id: { $eq: courseId } };
  try {
    const courses = await Course.find(findQueryEq);
    res.json(courses);
  } catch (err) {
    res.send("Error :-", err);
  }
});

//POST Method - Add a Course
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
      // res.sendFile(__dirname + "/11_DisplayCourses.html");
      res.redirect("http://localhost:3000/listCourses");
    });
  } catch (err) {
    res.send("Error :-", err);
  }
});

//Delete Method -> Removes a Course
coursesRouter.get("/deleteCourse/:id", (req, res) => {
  console.log("Delete course reached! :- ", req.params);
  const courseId = req.params.id;
  console.log("Delete course id :-  :- ", courseId);

  Course.findByIdAndRemove({ _id: courseId })
    .then((val) => {
      console.log("\nCourse data deleted successfully...", val);
      // res.sendFile(__dirname + "/11_DisplayCourses.html");
      res.redirect("http://localhost:3000/listCourses");
    })
    .catch((err) => console.log("Deletion failed ...", err));
});

//Update Method -> Modifies the course
coursesRouter.use(express.json()); //Middleware in Node JS
coursesRouter.use(express.urlencoded({ extended: true }));
coursesRouter.post("/modifyCourse", (req, res) => {
  try {
    console.log("req.body :- ", JSON.stringify(req.body));


    //Validation..
    if (Object.keys(req.body).length === 0) {
      res.send("Unable to update course as we received empty params");
      return;
    }

    Course.findByIdAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          name: req.body.name,
          category: req.body.category,
        },
      },
      { new: true } //Returns the modified data, without this you will get original data
    ).then((nCourse) => {
      console.log("Course updated successfully...", nCourse);
      // res.sendFile(__dirname + "/11_DisplayCourses.html");
      res.redirect("http://localhost:3000/listCourses");
    });
  } catch (err) {
    res.send("Error :-", err);
  }
});

//Update from Display Courses Handler
coursesRouter.get("/updateCourse/:id", (req, res) => {
  console.log("updateCourse :- ", req.params);
  const courseId = req.params.id;
  Course.findById(courseId).then((val) => {
    console.log("Course Fetched! Course :- ", val);
    const params =
      "id=" + val.id + "&name=" + val.name + "&category=" + val.category;
    res.redirect("/courses/udpateCourseForm?" + params);
  });
});

//Util Methods
coursesRouter.get("/udpateCourseForm", (req, res) => {
  res.sendFile(__dirname + "/11_UpdateCourse.html");
});

coursesRouter.get("/addCourse", (req, res) => {
  res.sendFile(__dirname + "/11_AddCourse.html");
});

coursesRouter.get("/displaycourses", (req, res) => {
  res.sendFile(__dirname + "/11_DisplayCourses.html");
});

module.exports = coursesRouter;
