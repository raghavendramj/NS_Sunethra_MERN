const express = require("express");
const app = express();

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

app.put("/api/cities", (req, res) => {
  console.log("Received Params :- ", req.body);
  //Destructring the object
  const { name, state, id } = req.body;

  //Data Validation
  if (!name || name.length < 3) {
    res.status(400).send("The name of the city is less than 3 characters");
    return;
  }

  let cityPassed = cities.find((city) => city.id == id);

  if (!cityPassed) {
    res.send(`No city found for id ${id}`);
    return;
  }

  //Update the city present in the cities
  cityPassed.name = name;
  cityPassed.state = state;
  res.send(cityPassed);
});

const port = process.env.PORT || "8082";
app.listen(port, () => console.log(`Listening to port ${port}`));
