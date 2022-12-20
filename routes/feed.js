const express =require('express');
const Post = require('../models/Feed');

const noticeRoute=express.Router()


noticeRoute.post('/postdata',async(req,res)=>{
try{
const {msg,username}=req.body;
const post=new Post({msg,username})
await post.save()
res.status(201).send(post)
    }
    catch(e){
        res.send('not post added successfully')
    }
})


noticeRoute.get('/alldata',async(req,res)=>{
   
  try{
      
        const allpost=await Post.find().sort({"createdAt":-1})

        res.send(allpost)
    
  }
  catch(e){
    res.send('invalid credentials')
  }
})

module.exports=noticeRoute;

