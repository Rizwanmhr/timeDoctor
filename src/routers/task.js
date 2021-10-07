const express = require("express");
const router = express.Router();
const Task = require("../models/TasksModel");
//to post task
router.post("/task", async (req, res) => {
  try {
    const tasks = new Task(req.body);
    console.log(req.body);
    const insertData = await tasks.save();
    console.log(insertData);
    res.status(201).json(insertData);
  } catch (error) {
    res.status(400).send(error);
  }
});
//to get task
router.get("/task", async (req, res) => {
  try {
    const employeTask = await Task.find({});
    res.status(200).json(employeTask);
  } catch (error) {
    res.status(400).json(error);
  }
});
//To Add Comments
router.post("/comments/:id", async (req, res) => {
  const { userId, comment } = req.body;
  try {
    const tasks = await Task.findById(req.params.id);
    const newComment = {
      userId,
      comment,
    };
    if (tasks) {
       await tasks.comments.unshift(newComment);
      await tasks.save();
      console.log(tasks)
      return res.json(tasks)
    }else{
        return res.status(404).json({message:'Task not Found'})
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
