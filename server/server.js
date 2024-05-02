const express=require("express");
const app=express();
const db=require("./db");
const bodyParser = require("body-parser");
const cors=require("cors");
const user=require("./models/UserModel")
const shortUrl = require("node-url-shortener");

app.use(cors());
app.use(bodyParser.json());



app.post("/signup",async (req,res)=>{
    try {
        const data= req.body;
        const newUser=await new user(data);
        const saved=newUser.save();
    } catch (error) {
        console.log(error)
    }
    
})


app.post("/login",async (req,res)=>{
    try {
        const data=req.body;
        const email=req.body.email;
        const password=req.body.password;

        const isEmail=await user.findOne({email:email});
        if(!isEmail){
            /* console.log("incorrect email ! This email does not exist") */
            res.status(401).json("invalid email");
        }
        const isPass=isEmail.password===password;
        if(isPass){
            /* console.log("Login Successfully !") */
            res.status(200).json("Login successful");
        }
        else{
            res.status(401).json("Incorrect password");
            /* console.log("Incorrect Password !") */
        }
    } 
    catch (error) {
        console.log(error)
        res.status(404).json("Some Error Occurred");
    }
})

app.listen("3001",()=>{console.log("server connected successfully !!")})