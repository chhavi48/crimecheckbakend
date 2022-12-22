const express =require('express');
const Postdata = require('../models/Feed');

const noticeRoute=express.Router()


noticeRoute.post('/postdata',async(req,res)=>{
try{
const {msg}=req.body;
const post=new Postdata({msg})
await post.save()
res.status(201).send(post)
    }
    catch(e){
        res.send('not post added successfully')
    }
})


noticeRoute.get('/alldata',async(req,res)=>{
   
  try{
      
        const allpost=await Postdata.find().sort({"createdAt":-1})

        res.send(allpost)
    
  }
  catch(e){
    res.send('invalid credentials')
  }
})

module.exports=noticeRoute;

