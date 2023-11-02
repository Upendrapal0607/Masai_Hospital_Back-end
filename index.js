// const express= require("express");
const express = require("express")
const cors= require("cors")
const {connection}= require("./db");
const { BoardRoute } = require("./Routes/Board.Route");
const app = express();
app.use(cors())
app.use(express.json())
app.use("/board",BoardRoute)
app.get("/",(req,res)=>{
    res.send("welcome to the backend")
})

app.listen(8080,async ()=>{
    try{
        await connection
        console.log("connected to the DataBase");
    }
    catch(error){
        console.log(error);
    }

    console.log("server is running on port 8080")
})