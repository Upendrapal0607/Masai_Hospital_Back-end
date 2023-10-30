const express= require("express");
const {DoctorModel} = require("../Model/Doctor.Model")
const ApointmentRoute= express.Router();
// const jwt= require("jsonwebtoken")
ApointmentRoute.get("/",async(req,res)=>{
    try{
   const Data=await DoctorModel.find()
//    console.log({Data})
   res.send({Data})
    }
    catch(error){
        res.send({messsage:error})
    }
})

ApointmentRoute.post("/",async(req,res)=>{
const ApointmentData= req.body
 console.log({ApointmentData})
try{

         const Apointed= DoctorModel(ApointmentData);
         await Apointed.save()
         res.send({messase :"Your Apointment is booked"})
    
     }
     catch(error){
         res.send({messsage:error})
     }
})

module.exports={
    ApointmentRoute
}