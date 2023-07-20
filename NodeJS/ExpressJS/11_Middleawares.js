const { isNumber } = require("@hapi/joi/lib/common");
const express = require("express");
const app = express();

//1. Middleware function
let validateId = (req, res, next) => {
  let param = parseInt(req.param("id"));

  if (isNumber(param) && param < 1) {
    res.status(400).send(`1. Incorrect Id :- ${param}`);
  }
  console.log("1. Valid Number -> ", param);
  next();
};

//2. Middleware function
let validateName = (req, res, next) => {
  let param = req.param("name");

  if (!param) {
    res.status(400).send(`2. Incorrect name :- ${param}`);
    return;
  }
  console.log("2. Valid Name -> ", param);
  next();
};

//Middleware
app.use("/users", validateId, validateName);

app.get("/users", (req, res) => {
  let id = req.param("id");
  let name = req.param("name");
  res.send(`Successfully processed for ${name} and ${id}`);
});


const port = process.env.PORT || "8082";
app.listen(port, () => console.log(`Listening to port ${port}`));
