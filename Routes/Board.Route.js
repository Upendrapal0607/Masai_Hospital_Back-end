const express= require("express");
const { BoardModel } = require("../Model/Board.Model");
// const { BoardBoardModel } = require("/Board.BoardModel");
const BoardRoute= express.Router();

BoardRoute.get("/",async(req,res)=>{
    try{
   const Data=await BoardModel.find()
   res.send({Data})
    }
    catch(error){
        res.send({messsage:error})
    }
})

BoardRoute.post("/",async(req,res)=>{
const BoardData= req.body
 console.log({BoardData})
try{
         const BoarDataAded= BoardModel(BoardData);
         await BoarDataAded.save()
         res.send({messase :"New Task created successfully"})
    
     }
     catch(error){
         res.send({messsage:error})
     }
})
BoardRoute.patch("/update/:id",async(req,res)=>{
//     const {id}= req.params
// const Data= req.body

//  console.log({Data,id})
try{
        //  const UpdatedData= BoardModel.FindByIdAndUpdate({_id:id},Data);
         res.send({messase :"update successful"})
     }
     catch(error){
         res.send({messsage:error})
     }
})
BoardRoute.delete("/delete/:id",async(req,res)=>{
const {id} = req.params
 console.log({id})
try{
        //  const Apointed= BoardModel.FindByIdAndDelete({_id:id});
         res.send({messase :"Delete successful"})
    
     }
     catch(error){
         res.send({messsage:error})
     }
})

module.exports={
    BoardRoute
}