const express = require("express");
const router=express.Router();
//import cars from "./backend/CarData.js"
const Car=require("../models/carModel")

router.get("/getAllCars",async(req,res)=> {
  
    try{
        const cars=await Car.find()
        //res.json(cars)
        res.send(cars)
    }
    catch(error){
        return res.status(400).json(error);
    }
    }
);
module.exports = router ;
