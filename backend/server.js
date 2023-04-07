const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/dbconnection');


const app = express()

const port = process.env.PORT 

connectDB();




app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('',require("./routing/router"))






app.listen(port,() => {
    console.log(`Souvik your are in ${port}`)
})