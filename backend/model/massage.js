const mongoose = require("mongoose");



const massageSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true 
    },
    Email:{
        type:String,
        required:true 
    },
    Massage:{
        type:String,
        required:true 
    }
})


const massageModel = mongoose.model("Massages", massageSchema)

module.exports = massageModel 