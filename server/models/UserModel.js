const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})




const user=mongoose.model("user",userSchema);

module.exports={user,link};