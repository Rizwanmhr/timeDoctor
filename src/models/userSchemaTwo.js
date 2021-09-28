const mongoose = require('mongoose')
const userSchemaTwo = new mongoose.Schema({
    name:{
    type:String,
    require:true
    },
    description:{
    type:String,
    require:true
    },
    status:{
    type:String,
    enum:['Not Started','Completed','Pending','Working'],
    },
});
const Task = mongoose.model('TASK',userSchemaTwo);
module.exports = Task;
