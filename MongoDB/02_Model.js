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

//Post Modal Objects!
const Post = mongoose.model("Post", postSchema);

//Export the model objects!
module.exports = {
  Post,
};
