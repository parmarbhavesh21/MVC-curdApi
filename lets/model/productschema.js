const mongoose =require("mongoose");
const bcryptjs= require('bcryptjs');
const jwt= require('jsonwebtoken');
let MoSchema= new mongoose.Schema({
    name: {
    type:    String,
    required: true,
  
    },
    email:{
        type: String,
        required:true,
        unique: true,

    },
    password:{
        type: String,
        required:true,
        unique: true,
    },
   price:{
        type: Number,
      
    },
  company:{
        type: String,
      
    },
    tokens:[{
        token:{
            type: String,
            required:true,
        }

    }]

})
MoSchema.methods.gentoken= async function(){
    let token= jwt.sign({_id:this._id.toString()},"SECRET_KEY");
    this.tokens=this.tokens.concat({token:token});
    await this.save();
    return token;
}


 MoSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcryptjs.hash(this.password,10)
        next();
    }
 })


module.exports= mongoose.model("production",MoSchema);