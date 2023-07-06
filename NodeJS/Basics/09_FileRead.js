const fileSystem = require("fs");

fileSystem.readFile("09_FileToRead.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading the file!");
  } else {
    console.log("3. Asyncronously reading data :- ", data);
  }
});

let utfFormattedData = fileSystem.readFileSync("09_FileToRead.txt", "utf-8");
console.log("1.Syncronously read - utfFormattedData :- ", utfFormattedData);

let normalData = fileSystem.readFileSync("09_FileToRead.txt");
console.log("2.Syncronously read-utfFormattedData :- ", normalData.toString());
