const express = require('express');
const router = express.Router();
const Task = require('../models/userSchemaTwo')

router.post('/task', async (req,res) => {
  try {
    const user = new Task(req.body)
    console.log(req.body)
   const insertData = await user.save();
   res.status(201).send(insertData);
  } catch (error) {
      res.status(400).send(error)
  }
});
//to get task
router.get("/task", async (req,res) => {
    try {
        const employeTask = await Task.find({});
        res.status(200).send(employeTask)
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports = router