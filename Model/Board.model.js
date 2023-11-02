const mongoose = require("mongoose");
const BoardSchema = mongoose.Schema(
  {
    name: String,
    tasks: [
      {
        title: String,
        description: String,
        status: String,
        subtasks: [
          {
            title: String,
            isCompleted: Boolean,
          },
        ],
      },
    ],
  },
  { versionKey: false }
);

const BoardModel = mongoose.model("Board", BoardSchema);

module.exports = {
  BoardModel
};
