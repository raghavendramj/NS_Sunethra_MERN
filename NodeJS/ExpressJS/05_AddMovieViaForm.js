//Show form
//Get input
//add movies
//show movies

const express = require("express");
const app = express();

const movies = [
  { id: 1, name: "Star Wars", genre: "Adventure" },
  { id: 2, name: "Transformers", genre: "Adventure" },
  { id: 3, name: "Toy Story", genre: "Drama" },
  { id: 4, name: "The Pursuit of Happiness", genre: "Fiction" },
  { id: 5, name: "Terminator", genre: "Action" },
];

app.get("/api/addmovie", (req, res) => {
  res.sendFile(__dirname + "/05_CreateMovie.html");
});

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

//Adding a movie!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/api/movies", (req, res) => {
  console.log("Adding a movie for req :-", req.body);

  if (Object.keys(req.body).length === 0) {
    res.send("Unable to add movies as we received empty params");
  } else {
    let newMovie = {
      id: movies.length + 1,
      name: req.body.movieName,
      genre: req.body.genre,
    };
    movies.push(newMovie);
    res.send(movies);
  }
});

const port = process.env.PORT || "8082";
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
