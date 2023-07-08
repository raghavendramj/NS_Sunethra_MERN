const fs = require("fs");
const path = require("path");

const directoryName = "15_Directories";

const commonCallback = (err) => {
  if (err) {
    console.log("Error occurred!");
  } else {
    console.log("Operation successful");
  }
};

fs.readdir(directoryName, (err, files) => {
  if (err) {
    console.log("Error occurred!");
  } else {
    console.log(files);
    files.forEach((file) => {
      const fileAbsName = __dirname + "\\" + directoryName + "\\" + file;
      console.log("fileAbsName", fileAbsName);
      fs.unlink(fileAbsName, commonCallback); 
    });
    fs.rmdir(directoryName, commonCallback);
  }
});

setTimeout(() => { 
  fs.mkdir(directoryName, (err) => {
    if (err) {
      console.log("Directory Creation error!");
    } else {
      console.log("Successfully directory got created!");
      fs.writeFile(
        directoryName + "/15_writetest_01.txt",
        "New Content -01 ",
        commonCallback
      );
      fs.writeFile(
        directoryName + "/15_writetest_02.txt",
        "New Content -02 ",
        commonCallback
      );
    }
  });
}, 2000);
