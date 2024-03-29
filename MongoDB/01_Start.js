const mongoose = require("mongoose");
const { Post } = require("./02_Model");

const connectionPromise = mongoose.connect("mongodb://127.0.0.1/sunethra");

connectionPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

async function getPosts() {
  const whereObject = {
    title: "React JS",
  };
  // const posts = await Post.find({});
  const posts = await Post.find({}, {title: 1});
  console.log("posts -> ", posts);
}

getPosts();
   
