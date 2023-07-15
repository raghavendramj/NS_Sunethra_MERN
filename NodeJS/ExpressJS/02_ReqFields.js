let express = require("express");
const application = express();

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" },
  { id: 3, name: "Martin" },
];

function isNull(str) {
  return str === "" || str === null || str === undefined;
}
application.get("/users", (req, res) => {
  const username = req.param("username");
  console.log("hasUserName :- ", isNull(username));

  if (!isNull(username)) {
    console.log("Querying for /users with username:- ", req.param("username"));
    res.send(users.find((user) => user.name === req.param("username")));
  } else {
    console.log("Querying for all users");
    res.send(users);
  }
});

application.get("/users/:username", (req, res) => {
  console.log("Querying for :- ", req.param("username"));
  res.send(users.find((user) => user.name === req.param("username")));
});

let port = process.env.PORT || "8082";
application.listen(port, () => console.log(`Listening to the port ${port}`));
