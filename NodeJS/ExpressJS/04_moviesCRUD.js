// create 5 movies -> movie:id, name, genre -> 5 objects

// get all movies
// get movie by id
// get movie by name
// get movie by genre

// add movie

const express = require("express");
const app = express();

const movies = [
  { id: 1, name: "Star Wars", genre: "Adventure" },
  { id: 2, name: "Transformers", genre: "Adventure" },
  { id: 3, name: "Toy Story", genre: "Drama" },
  { id: 4, name: "The Pursuit of Happiness", genre: "Fiction" },
  { id: 5, name: "Terminator", genre: "Action" },
];

function isNull(str) {
  return str === "" || str === null || str === undefined;
}


//Adding a movie!
app.use(express.json());
app.post("/api/movies", (req, res) => {
  console.log("Adding a movie for req :-", req.body); 

  let newMovie = {
    id: movies.length + 1,
    name: req.body.name,
    genre: req.body.genre,
  };
  movies.push(newMovie); 
  res.send(movies);
});

//Get All Movies
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

//Get each movie by Id
app.get("/api/movies/id/:id", (req, res) => {
  const movieIdQueried = req.param("id");
  const movieFunc = (movie) => movie.id === parseInt(movieIdQueried);
  let matchedMovie = movies.find(movieFunc);
  if (isNull(matchedMovie)) {
    res.send(`No Movies with id ${movieIdQueried} matched!`);
  } else {
    console.log("Querying for movie with id :- ", movieIdQueried);
    console.log("matchedMovie -> ", matchedMovie);
    res.send(matchedMovie);
  }
});

//Get each movie by genre
app.get("/api/movies/genre/:genre", (req, res) => {
  const movieByGenreQueried = req.param("genre");
  const movieFunc = (movie) => movie.genre === movieByGenreQueried;
  let matchedMovie = movies.find(movieFunc);
  if (isNull(matchedMovie)) {
    res.send(`No Movies with id ${movieByGenreQueried} matched!`);
  } else {
    console.log("Querying for movie with genre :- ", movieByGenreQueried);
    console.log("matchedMovie -> ", matchedMovie);
    res.send(matchedMovie);
  }
});

const port = process.env.PORT || "8082";
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
