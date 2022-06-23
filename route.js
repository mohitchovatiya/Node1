var express=require('express');
const { default: mongoose } = require('mongoose');
var router=express.Router();
mongoose.connect("mongodb://mohit:mohit@cluster0.vsafa9r.mongodb.net/?retryWrites=true&w=majority")

router.get("/",(req,res)=>{
    res.sendFile("index.html",
    {root:__dirname});
});


module.exports=router