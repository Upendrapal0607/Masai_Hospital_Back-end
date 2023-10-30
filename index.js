const express= require("express");
const cors= require("cors")
const {connection}= require("./db")
const {UserRoute}= require("./Routes/User.Route.js")
const {ApointmentRoute}= require("./Routes/Doctor.Route.js")
const app = express();
app.use(cors())
app.use(express.json())
app.use("/user",UserRoute)
app.use("/appointments",ApointmentRoute)
app.get("/",(req,res)=>{
    res.send("welcome to the Masai Hospital")
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