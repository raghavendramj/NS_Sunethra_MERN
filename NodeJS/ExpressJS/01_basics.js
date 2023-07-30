let express = require("express");
let application = express();

application.get("/", (req, res) => { 
  res.send("Welcome tot Newton school!");
});

application.listen(8082);
