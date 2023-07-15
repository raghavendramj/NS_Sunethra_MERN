let express = require("express");
let application = express();

application.get("/", (req, res) => {
  console.log("req :- ", req);
  res.send("Welcome tot GeeksforGeeks");
});

application.listen(8082);
