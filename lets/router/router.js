const express= require('express');
const routers= express.Router();
const {home, testing}= require("../conn/conn.js");
 routers.route("/home").get(home);
 routers.route("/").get(testing);


 module.exports= routers;