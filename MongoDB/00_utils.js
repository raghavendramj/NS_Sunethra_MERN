const mongoose = require("mongoose");

function getDBConnection() {
  const connectionPromise = mongoose.connect("mongodb://127.0.0.1/sunethra");
  connectionPromise
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB...", err));

  return connectionPromise;
}

async function fetchObjects(Object, findQuery) {
  const selectQuery = { _id: 0, name: 1, courseId: 1 };
  const students = await Object.find(findQuery).select(selectQuery);
  console.log("Objects fetched ->", students);
}

//Export the model objects!
module.exports = {
  getDBConnection,
  fetchObjects
};
