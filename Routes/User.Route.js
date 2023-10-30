const express= require("express");
const {UserModel} = require("../Model/User.Model")
const UserRoute= express.Router();
const jwt= require("jsonwebtoken")
UserRoute.get("/",async(req,res)=>{
    try{
   const Data=await UserModel.find()
   console.log({Data})
   res.send({User:Data})
    }
    catch(error){
        res.send({messsage:error})
    }
})

UserRoute.post("/signup",async(req,res)=>{
const userData= req.body
 console.log({userData})
try{
    const UserExist=await UserModel.findOne({email:userData.email})
    if(UserExist){
        res.status(200).send({messase:`user whose mail is ${userData} is already exist please login`})
    }
    else{
         const ResisterUser= UserModel(userData);
         await ResisterUser.save()
         res.send({messase :"New User Registerd"})
    }

     }
     catch(error){
         res.send({messsage:error})
     }
})
UserRoute.post("/login",async(req,res)=>{
const {email,pass}= req.body
 console.log({email,pass})
try{
    let UserExist=await UserModel.findOne({email:email})
    if(UserExist){
        const token=jwt.sign({name:"Masai school"},"hospital",{expiresIn:"5h"})
    
        res.status(200).send({"msg":"Login successful!", "token":token,user:email})
        
    }
    else{
        
res.status(200).send({message:`user whose mail is ${userData} is not registered please registered first`})
    }

     }
     catch(error){
         res.send({messsage:error})
     }
})

module.exports={
    UserRoute
}