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

app.delete("/api/cities/:id", (req, res) => {
  console.log("Received Params :- ", req.param("id"));
  //Destructring the object
  const id = parseInt(req.param("id"));
  //Data Validation
  if (id < 1) {
    res.status(400).send("The name of the city is less than 3 characters");
    return;
  }

  let cityIndex = cities.findIndex((city) => city.id === id);
  console.log("cityIndex :- ", cityIndex);

  if (cityIndex === -1) {
    res.send(`No city found for id ${id}`);
    return;
  }
  //Delete city passed
  cities.splice(cityIndex, 1);
  res.send(cities);
});

const port = process.env.PORT || "8082";
app.listen(port, () => console.log(`Listening to port ${port}`));
