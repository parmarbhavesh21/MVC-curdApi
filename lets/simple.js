require("dotenv").config();
const MoSchema= require("./model/productschema")
const  connecDB = require("./collaction/collaction")
const jsonfile= require("./pro.json");

let star= async ()=>{
await connecDB(process.env.MONGO_Url);
await MoSchema.deleteMany();
 await MoSchema.create(jsonfile);
console.log("succes");
}
star()