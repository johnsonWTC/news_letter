const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const application = express();
application.listen(3001,function(req, res){
console.log("server is now running");

});