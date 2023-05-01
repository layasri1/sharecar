const express = require("express");
const app = express();

//import mongoose from 'mongoose';

const mongoose = require("mongoose");


function connectDB(){
 mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0',{useUnifiedTopology:true ,useNewUrlParser:true})
 //this connected to my local database that is mongodb compass , change this link according to your system.
 
    const connection =mongoose.connection
    connection.on('connected',()=>{
        console.log('Mongodb successful')
    })

    connection.on('error',()=>{
        console.log('Mongodb failed')
    })
    
}
connectDB()

module.exports=mongoose