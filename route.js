var express=require('express');
const { default: mongoose } = require('mongoose');
var router=express.Router();
mongoose.connect("mongodb")

router.get("/",(req,res)=>{
    res.sendFile("index.html",
    {root:__dirname});
});


module.exports=router