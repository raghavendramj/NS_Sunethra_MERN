const mongoose = require("mongoose");

//Post Model Schema
const postSchema = new mongoose.Schema({ 
  title: String,
  body: String,
  category: String,
  likes: Number,
  tags: Array,
  date: Date,
});

//Student Model Schema
const studentSchema = new mongoose.Schema({
  name: String,
  enroll: Number,
  courseId: Number,
});

//Course Model Schema
const courseSchema = new mongoose.Schema({ 
  name: String,
  category: String,
});

//Post Modal Objects!
const Post = mongoose.model("Post", postSchema);
const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);

//Export the model objects!
module.exports = {
  Post,
  Student,
  Course,
};
