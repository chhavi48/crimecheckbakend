const { Schema, model } = require("mongoose");
const FeedModel=new Schema({
    msg:String,
})
const Post=model('post',FeedModel)

module.exports=Post;