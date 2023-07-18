const express = require("express");
const app = express();
const joi = require("@hapi/joi");

const cities = [
  { id: 1, name: "Bangalore", state: "Karnataka" },
  { id: 2, name: "Nagpur", state: "Maharastra" },
  { id: 3, name: "Bangalore", state: "Karnataka" },
  { id: 4, name: "Mysore", state: "Karnataka" },
  { id: 5, name: "Chennai", state: "Tamilnadu" },
  { id: 6, name: "Jabalpur", state: "MP" },
  { id: 7, name: "Indore", state: "MP" },
  { id: 8, name: "Pune", state: "Maharastra" },
];

app.get("/api/cities", (req, res) => {
  res.send(cities);
});

//Middleware in Node JS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/api/cities", (req, res) => {
  console.log("Received Params :- ", req.body);

  //JOI Framework Validation...
  //Creating schema for validation
  const schema = joi.object({
    name: joi.string().min(3).required(),
    state: joi.string().min(3).required(),
  });

  //Validating against schema
  const result = schema.validate(req.body);

  //Checking for results!
  if (result.error) {
    const errMsg = result.error.details[0].message;
    console.log("Result errMsg :-", errMsg);
    res.status(400).send(errMsg);
    return;
  }
  const { name, state } = req.body;
  const newCity = { id: cities.length + 1, name, state };
  cities.push(newCity);
  res.send(newCity);
});

const port = process.env.PORT || "8082";
app.listen(port, () => console.log(`Listening to port ${port}`));
