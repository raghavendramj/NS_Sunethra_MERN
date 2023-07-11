const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcomt to HTTP Module");
  } else if (req.url === "/about") {
    res.write("This is ABOUT Page!");
  } else {
    res.write("Some other page!");
  }
  res.end();
});

server.listen("8082");
