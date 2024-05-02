const mongoose=require("mongoose");

const linkSchema=new mongoose.Schema({
    inputLink:{
        type:String,
        required:true
    },
    newLink:{
        type:String,
        required:true
    }},
    {
        timestamps:true
    }
);

const link=mongoose.model("link",linkSchema);

module.exports=link;
