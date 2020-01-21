const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const application = express();
application.listen(3002,function(req, res){
console.log("server is running");
});

application.get("/", function(req,res){
res.sendFile(__dirname + "/signup.html");
});