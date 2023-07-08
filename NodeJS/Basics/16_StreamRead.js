const fs = require("fs");

const fileName = "16_FileToRead.txt";

const reader = fs.createReadStream(fileName, "utf-8");

reader.on("data", (chunk) => {
  console.log("Data :- ", chunk.toString());
});

reader.on("end", () => {
  console.log("reached end of stream");
});

reader.on("error", () => {
  console.log("Error occurred!");
});
