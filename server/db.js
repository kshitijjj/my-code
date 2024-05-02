const mongoose = require("mongoose")
const url="mongodb://127.0.0.1:27017/AuthData"

mongoose.connect(url);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("DB connected successfully")
})

db.on('error',(error)=>{
    console.log(error);
})

module.exports=db;