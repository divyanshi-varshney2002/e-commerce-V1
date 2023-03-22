const express=require("exppress");
const app=express();

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/auth_demo")
.then(()=>console.log("DB connected !!!!"))
.catch((err)=>console.log(err))

app.get("/",(req,res)=>{
    res.render("home route");
})

app.get("/register",(req,res)=>{
    res.render("signup");
})

app.post("/register",(req,res)=>{
    const {username,password} =req.body;
    
})