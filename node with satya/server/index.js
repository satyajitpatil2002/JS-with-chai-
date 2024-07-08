const { log } = require("console");
const http=require("http");

const  myServer= http.createServer((req,res)=>{
    console.log("new req.recive");
    res.end("hellow from Server");

});
myServer.listen(8000,()=> console.log("server started"));
