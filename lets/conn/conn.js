
const MoSchema= require('../model/productschema.js')

let home= async (req,resp)=>{
resp.send("hello this is home page")

}

let testing= async (req,resp)=>{
    let {name,price,sort,select}=req.query;
    let filterobj={}
    if(name){
filterobj.name={ $regex  : name, $options: "i"}
}
if(price){
    filterobj.price=price
}
let mydata=MoSchema.find(filterobj)
if(sort){
    let sortfix= sort.split(",").join(" ");
 mydata=mydata.sort(sortfix)
}
if(select){

    let selectfix= select.split(",").join(" ");
    mydata=mydata.select(selectfix);
}

let page= Number(req.query.page) ||1
let limit=Number(req.query.limit) || 2
let skip =(page-1)*limit;
mydata=mydata.skip(skip).limit(limit)




console.log("mydata kya he " ,mydata.options);
console.log("filtrerobj kya he" ,filterobj);

let apidata=await mydata

resp.status(200).json({apidata ,PageData:apidata.length , page:page ,})



    
    }
module.exports= {home,testing};