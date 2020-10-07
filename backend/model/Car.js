const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand:{type: String, required:true},
    size: {type: String},
    color:String,
    power:Number,
    modal:Number,
    description:String,
    hasTrailerHitch:{type:Boolean, default:false},
    userID:String
});

const Car = mongoose.model('car',carSchema);


module.exports = Car;