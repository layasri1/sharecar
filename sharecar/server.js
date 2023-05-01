const express = require('express')
const app= express()
const bodyParser=require('body-parser')
const port=process.env.PORT || 3004
const mongoose = require ('mongoose');
const dbConnection= require('./db')

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use('http://localhost:3004/api/cars/',require('./routes/carsRoute'))
app.use('http://localhost:3004/api/users/',require('./routes/userRoute'))



  
app.get('/',(req,res) => res.send("hello"));
   
app.listen(port, ()=> console.log('node js example app running in port '))