const fs = require('fs');

fs.writeFileSync("newFile.txt","This is the 1st line \n");

fs.appendFileSync("newFile.txt","This is the 2nd line \n");

console.log("MSSG");

data = fs.readFileSync("newFile.txt","utf-8");
console.log(data);

console.log("MSSG 2");