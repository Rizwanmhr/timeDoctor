const express = require('express')
const router = express.Router();
require('../db/conn')
const User = require('../models/userSchema')

router.get("/task",(req,res)=>{
    return res.send("Hello from router");
});
router.post("/register", async (req,res)=>{
    const {name, email, phone, designation, employeetype, userId} = req.body;
  if(!name || !email || !phone || !designation || !employeetype || !userId){
     return res.status(422).json({error:"Plz enter user id"})
  }
try {
    const userExist = await User.findOne({userId:userId});
    if(userExist){
        return res.status(422).json({error:"userId is already exist"})
    }
    const user = new User({name, email, phone, designation, employeetype, userId});
    await user.save();
    res.status(201).json({message:'User registered successfully'})
} catch (error) {
    console.log(error)
}
//handle Get method
router.get("/register", async (req,res) => {
    try {
        const employeData = await User.find({});
        res.status(201).send(employeData)
    } catch (error) {
        res.status(400).send(error)
    }
})
});
module.exports = router