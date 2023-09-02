const { MongoClient } = require("mongodb");
const express = require("express");
let db;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.json());

app.get("/api/animals", async (req, res) => {
  const allAnimals = await db.collection("animals").find().toArray();
  res.json(allAnimals);
});

//POST Request to create a new Animal
app.post("/create-animal", async (req, res) => {
  console.log("POST Method data :- ", req.body);
  const newCreatedInfo = await db.collection("animals").insertOne(req.body);
  const findQuery = { _id: new Object(newCreatedInfo.insertedId) };
  const newAnimal = await db.collection("animals").findOne(findQuery);
  console.log("newAnimal POST -> ", newAnimal);
  res.send(newAnimal);
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

async function start() {
  const url = "mongodb://127.0.0.1:27017/AmazingMernApp?&authSource=admin";
  const client = new MongoClient(url);
  await client.connect();
  db = client.db();
  const port = process.env.PORT || 8100;
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
}
start();
