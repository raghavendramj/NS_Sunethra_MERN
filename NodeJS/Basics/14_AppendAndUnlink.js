const fs = require("fs");

const fileName = "14_ForWrite.txt";

fs.writeFile(fileName, "Original cotent.", (err) => {
  if (err) {
    console.log("Error Occurred... Writing");
  } else {
    console.log("File created successfully");
  }
});

fs.appendFile(fileName, "\nThis is appended content!", (err) => {
  if (err) {
    console.log("Error Occurred... Appending");
  } else {
    console.log("File content appended successfully");
  }
});

setTimeout(() => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log("Error in unlinking the content!");
    } else {
      console.log("Successfully deleted file.");
    }
  });
}, 3000);
