const mongoose = require("mongoose");
const tasksSchema = new mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name:{
    type:String,
    require:true
  },
  userId: {
    type: Number,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  projects: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "Completed", "Pending", "Working"],
  },
  comments: [
    {
      userId: {
        type: Number,
      },
      comment: {
        type: String,
      },
      timeStamp: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});
const Task = mongoose.model("tasks", tasksSchema);
module.exports = Task;
