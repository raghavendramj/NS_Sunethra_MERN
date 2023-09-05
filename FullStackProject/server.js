const { MongoClient, ObjectId } = require("mongodb");
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
  const findQuery = { _id: new ObjectId(newCreatedInfo.insertedId) };
  const newAnimal = await db.collection("animals").findOne(findQuery);
  console.log("newAnimal POST -> ", newAnimal);
  res.send(newAnimal);
});


//Delete Animal
app.delete("/animal/:id", async (req, res) => {
  const idFromReq = req.params.id;
  console.log("Delete Method data :- ", idFromReq);
  const findQuery = { _id: new ObjectId(req.params.id) };
  const foundAnimal = await db.collection("animals").findOne(findQuery);
  console.log("foundAnimal -> ", foundAnimal);
  if (foundAnimal) {
    //delete it
    db.collection("animals").deleteOne(findQuery);
    res.send("Good job!");
  } else {
    res.send("No Object with matching id found!");
  }
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
