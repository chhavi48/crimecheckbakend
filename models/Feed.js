const { Schema, model } = require("mongoose");
const FeedModel=new Schema({
    msg:String,
    usernames:String,
},{timestamps:true})
const Post=model('post',FeedModel)

module.exports=Post;