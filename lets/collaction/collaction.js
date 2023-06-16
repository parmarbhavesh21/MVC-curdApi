const mongoose= require("mongoose");

const connecDB = (urI) =>{

return mongoose.connect(urI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("mongo Connect");
}).catch((err)=>{
    console.log("mongo errr",err);
})

}

module.exports= connecDB;