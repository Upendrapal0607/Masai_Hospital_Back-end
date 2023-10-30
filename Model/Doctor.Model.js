const mongoose= require("mongoose")
const DoctorSchema= mongoose.Schema({
        name:String,
        image: String,
        specialization:String,
        experience: Number,
        location: String,
        date:String,
          "slots" : Number,
        fee:Number,},{versionKey:false})

const DoctorModel= mongoose.model("Doctor",DoctorSchema)

module.exports={
    DoctorModel
}