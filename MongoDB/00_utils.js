const mongoose = require("mongoose");

function getDBConnection() {
  const connectionPromise = mongoose.connect("mongodb://127.0.0.1/sunethra");
  connectionPromise
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB...", err));

  return connectionPromise;
}

//Export the model objects!
module.exports = {
  getDBConnection,
};
