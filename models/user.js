const { Schema, model } = require("mongoose");
const userModel=new Schema({
    username:String,
    
})
const User=model('login',userModel)

module.exports=User