const express=require("express");
const path=require("path");
const app=express();
const cookieParser =require("cookie-parser");

app.set("view",path.join)
app.use(cookieParser());

app.get("/setcookies",(req,res)=>{
    res
    .cookie("name","divyanshi")
    .cookie("location","mathura")
    .cookie("age",20)
    .cookie("login","true")
    .send("Cookie created successfully");
})

app.get("/seecookies",(req,res)=>{
    res.send(req.cookies);
})

app.get("/login",(req,res)=>{
    const {login}=req.cookies;
    if(login=="true")
        return res.send("user has logged in");
    return res.redirect("/setcookies");
})

app.listen(3000,()=>{
    console.log("Server running at 3000");
})