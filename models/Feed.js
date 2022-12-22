const { Schema, model } = require("mongoose");
const FeedModel=new Schema({
    msg:String,
  
},{timestamps:true})
const Post=model('post',FeedModel)

module.exports=Post;