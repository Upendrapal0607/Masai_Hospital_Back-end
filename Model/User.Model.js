const mongoose= require("mongoose")

const UserSchema= mongoose.Schema({
    email:String,
    pass:String
},{versionKey:false})

const UserModel= mongoose.model("User",UserSchema)

module.exports={
    UserModel
}