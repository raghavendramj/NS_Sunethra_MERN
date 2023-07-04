const path = require("path")


console.log("__filename -> ", __filename);
console.log("Filename and its info :- ", path.parse(__filename));

console.log("process.env.PATH :- ", process.env.PATH.split(path.delimiter));
console.log("path.dirname():- ", path.dirname("C:\\Users\\Raghavendra M J\\OneDrive\\Desktop\\Online_Classes"));
const fileBaseName = path.parse(__filename).base;
console.log("fileBaseName:- ", fileBaseName);
console.log("path.extname():- ", path.extname(fileBaseName));
