const fs = require("fs");

const fileContent = "This content is added on sixth july two thousand and twenty three";

fs.writeFile("12_WriteContent.txt", fileContent, (err) => {
    if(err){
        console.log("Error");
    } else {
        console.log("File created!");
    }
})