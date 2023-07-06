const fs = require("fs");

fs.stat("10_FileOpenExample.txt", (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Statistics about file :- ", stats);
    console.log("stats isDir :- ", stats.isDirectory());
    console.log("stats isFile :- ", stats.isFile());
    console.log("stats size :- ", stats.size);
  }
});
