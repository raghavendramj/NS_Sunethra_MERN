const fs = require("fs");

const dirName = "./15_Directories";

const commonCallback = (err) => {
  if (err) {
    console.log("Error occurred!");
  } else {
    console.log("Operation successful");
  }
};

fs.rmdir(dirName, commonCallback);

setTimeout(() => {
  fs.mkdir(dirName, (err) => {
    if (err) {
      console.log("Directory Creation error!");
    } else {
      console.log("Successfully directory got created!");
      fs.writeFile(
        dirName + "/15_writetest_01.txt",
        "New Content -01 ",
        commonCallback
      );
      fs.writeFile(
        dirName + "/15_writetest_02.txt",
        "New Content -02 ",
        commonCallback
      );
    }
  });
}, 2000);
