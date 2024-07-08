//const { isUtf8 } = require("buffer");
const fs= require("fs");

 
//sync means syncronise call
//fs.writeFileSync('./test.txt',"hey satyajit patil");


//Async..
// //fs.writeFile('./test.txt',"hey satya async  ",(err)=>{})

// const result=fs.readFile("./contact.txt","Utf-8",(error,result)=>{
//     if(error){console.log("error");

// }
// else{
//     console.log(result);
  
// }});

// fs.appendFileSync('./test.txt', new Date().toLocaleString());

fs.appendFileSync("./test.txt",`${Date.now()} hey satya \n`);

// fs.copyFileSync("./test.txt","./copy.txt");
