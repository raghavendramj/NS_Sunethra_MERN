const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const readstream = fs.createReadStream("21_Simple.html");
    res.writeHead(200, {"Content-type" : "text/html"});
    readstream.pipe(res);
});
server.listen("8083")