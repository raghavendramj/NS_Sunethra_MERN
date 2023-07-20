const express = require("express");
const app = express();

let cities = [
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

app.delete("/api/cities/id/:id", (req, res) => {
  const id = parseInt(req.param("id"));
  res.send(deleteCity("id", id));
});

app.delete("/api/cities/city/:city", (req, res) => {
  const city = req.param("city");
  res.send(deleteCity("name", city));
});

app.delete("/api/cities/state/:state", (req, res) => {
  const state = req.param("state");
  res.send(deleteCity("state", state));
});

let deleteCity = (query, param) => { 
  console.log(`query :- ${query}, param:- ${param}`); 

  let cityIndex = cities.findIndex(city[query] === param);
  console.log(`cityIndex :- ${cityIndex}`);
  if (cityIndex == -1) {
    return `No city found for city ${param}`;
  } else {
    let filteredCities = cities.filter((city) => city[query] !== param);
    cities = filteredCities;
    return filteredCities;
  }
};

const port = process.env.PORT || "8082";
app.listen(port, () => console.log(`Listening to port ${port}`));
