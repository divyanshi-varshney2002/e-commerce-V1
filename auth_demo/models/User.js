
const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    username:{
        type:String,
        trim:true
    },
    hash:{
        type:String,
        trim:true
    }
})
