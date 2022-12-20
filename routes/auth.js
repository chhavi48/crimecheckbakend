const express =require('express')
const User = require('../models/user')
const loginRoute=express.Router()


loginRoute.post('/',async(req,res)=>{

    try{
        const {username}=req.body
        const login=new User({username})
        await login.save()
        res.status(201).send("you are logged in successfully")
    }
    catch(error){
        res.sendStatus(401).send('unauthorized')
    }


})

module.exports=loginRoute

