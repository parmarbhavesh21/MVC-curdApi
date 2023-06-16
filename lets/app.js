require("dotenv").config();
const express= require('express');
const app= express();
const port= process.env.port || 5000;
const connecDB= require("./collaction/collaction.js");
const MoSchema= require('./model/productschema.js')
const routers= require("./router/router.js");
const { urlencoded } = require("body-parser");

// app.use({express. urlencoded ()})
app.get("/",(req,resp)=>{
    resp.send("this is Home page")
})
app.use("/api",routers)

async function star(){
await connecDB(process.env.MONGO_Url)

app.listen(port,()=>{
console.log(`http://localhost:${port}`);
})
    
}
star();