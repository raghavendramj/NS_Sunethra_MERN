const fileSystem = require("fs");

//w+ -> Open for reading and writing. If the file does not exist, it is created. 
// If the file already exists, it is truncated.
fileSystem.open("10_FileOpenExample.txt", "w+", (err, fd) => {
  if (err) {
    console.log("Error reading a file");
  } else {
    console.log("File opened :- ", fd);
  }
});
