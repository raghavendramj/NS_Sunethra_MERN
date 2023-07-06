const fs = require("fs");

const fileContent = "This file is created and renamed!";

fs.writeFile("13_WriteContent.txt", fileContent, (err) => {
  if (err) {
    console.log("Error creating!");
  } else {
    console.log("1. File created!");
    fs.rename("13_WriteContent.txt", "13_RenamedContent.txt", (err) => {
      if (err) {
        console.log("Error renaming!");
      } else {
        console.log("2. File renamed!");
      }
    });
  }
});
