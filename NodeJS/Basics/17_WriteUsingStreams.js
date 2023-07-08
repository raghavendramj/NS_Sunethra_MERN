const fs = require("fs");

const fileName = "17_FileToWrite.txt";
const writer = fs.createWriteStream(fileName);

const content = "This stream writes the content to file..." + fileName;

writer.write(content, (err) => {
  if (err) {
    console.log("Write error occurred!");
  } else {
    console.log("Write success!!");
  }
});

setTimeout(() => {
  const reader = fs.createReadStream(fileName);
  reader.on("data", (chunk) => {
    console.log("17. Data :- ", chunk.toString());
  });

  reader.on("end", () => {
    console.log("17. Reached end of stream");
  });

  reader.on("error", () => {
    console.log("Error occurred!");
  });
}, 1000);
