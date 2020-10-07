const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    cars:[{type:mongoose.Schema.Types.ObjectId,ref:"Car"}]
});


const User = mongoose.model('user', UserSchema);

module.exports = User;