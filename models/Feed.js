const { Schema, model } = require("mongoose");
const FeedModel=new Schema({
    msg:String,
    username:String,
},{timestamps:true})
const Post=model('post',FeedModel)

module.exports=Post;