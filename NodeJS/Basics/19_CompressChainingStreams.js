const fs = require("fs");
const zlib = require("zlib");

//------------- Compression Logic START-------------------
let readstream = fs.createReadStream("19_FileToRead.txt");
const zipFileName = "19_Zipped.txt.gz";
let writeStream = fs.createWriteStream(zipFileName);

readstream.pipe(zlib.createGzip()).pipe(writeStream);
console.log("File compressed! -> ", zipFileName);
//------------- Compression Logic END-------------------

//------------- Extraction Logic START-------------------
//Both started in parallel could cause issues, so setTimeout is introduced to add some delay
setTimeout(() => {
  const inpStream = fs.createReadStream(zipFileName);
  const output = fs.createWriteStream("19_Extracted.txt");
  inpStream.pipe(zlib.createUnzip()).pipe(output);
  console.log("Content File Extracted! -> 19_Extracted.txt");
}, 1000);
//------------- Extraction Logic END-------------------
