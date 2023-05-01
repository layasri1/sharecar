const express = require("express");
const router=express.Router();

const user1=require("../models/userModel")

//const user2=require("../models/userModel")


router.post("/login",async(req,res)=>{
    const {username,password}=req.body
try{
   // const user=await user1.findOne([username,password])
    const user=await user1.findOne({ username, password})
        if(user){
            res.send(user)
    }
    else{
        return res.status(400).json({error:"Invalid"});
    }
}
catch(error){
    return res.status(400).json({error:error.message});
}
})



router.post("/register",async(req,res)=>{
    /// const {username,password}=req.body
try{
    const newuser= new user1(req.body)
    await newuser.save()
    res.send('user registered successfully')
    
}
catch(error){
    return res.status(400).json({error:error.message});
}
});
module.exports=router