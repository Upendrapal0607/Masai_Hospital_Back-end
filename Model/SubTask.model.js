const mongoose= require("mongoose")
const TaskSchema= mongoose.Schema({
        _id: ObjectId,
           title : String,
           isCompleted : boolean
      },{versionKey:false})

const TaslModel= mongoose.model("Task",TaskSchema)

module.exports={
    TaslModel
}