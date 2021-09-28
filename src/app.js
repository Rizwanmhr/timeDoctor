const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require("express");
const app = express();
// let port = 3000 || process.env.PORT;
dotenv.config({path:"./config.env"})
let port = 3000 || process.env.PORT;
require('./db/conn')
app.use(express.json())
//to link our routers
app.use(require('./routers//auth'))
//Middleware
const middleware = (req,res,next) =>{
console.log('Hello Middleware')
next();
}
// middleware()

// app.get("/task",(req,res)=>{
//     return res.send("Hello Worlds");
// })
app.get("/employees",middleware,(req,res)=>{
    return res.send("Hello From Employees");
})

app.listen(port, () => {
  console.log(`Listning from port ${port}`);
});
