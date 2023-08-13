const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Course } = require("./02_Model");

//Middleware -> to receive the input as JSON
const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/sunethra"); //connection happens -> stored in connection variable...
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connection successfully established!");
});

app.get("/", (req, res) => {
  res.send("Welcome to full stack applcation");
});

app.use("/courses", router);
router.get("/", async (req, res) => {
  console.log("Reached here");
  try {
    const courses = await Course.find();
    console.log("courses -> ", courses);
    res.json(courses);
  } catch (err) {
    res.send("Error occurred :- ", err);
  }
});

const port = process.env.PORT || 8100;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
