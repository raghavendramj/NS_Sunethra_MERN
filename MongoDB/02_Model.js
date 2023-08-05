const mongoose = require("mongoose");

//Post Model Schema
const postSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  body: String,
  category: String,
  likes: Number,
  tags: Array,
  date: Date,
});

//Student Model Schema
const studentSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  class: String,
  section: String,
  age: Number,
});

//Post Modal Objects!
const Post = mongoose.model("Post", postSchema);
const Student = mongoose.model("Student", studentSchema);

//Export the model objects!
module.exports = {
  Post,
  Student,
};
