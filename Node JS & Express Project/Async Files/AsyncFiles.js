const fs = require('fs');

fs.writeFile("newFile.txt","Shivansh \n",(err)=>{
    console.log(err);
    console.log("File created");
});

fs.appendFile("newFile.txt","Mishra \n",()=>{{
    console.log("Appended");
}});

console.log("MSSG");

const data = fs.readFile("newFil.txt","utf-8",(err,data)=>{
    console.log("The error is "+err);
    console.log(data);
});


console.log("MSSG 2");