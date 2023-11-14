const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('router')

const app = express();

//bodyparser
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

//cors
const corsOption={
    origin: 'http://localhost:3000'
}
// app.use(cors(corsOption))

//router 
const departmentRouter = require('../Hospital/Router/department')
const departmentHeadRouter = require("../Hospital/Router/departmentHead")
const employeeRouter = require("../Hospital/Router/employee")
app.use("/department",departmentRouter)
app.use("/departmentHead",departmentHeadRouter)
app.use("/employee",employeeRouter)
//mongodb
mongoose.Promise = global.Promise

const config = require('./Config/dbconfig');

mongoose.connect(config.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log("mongodb is not connected",err);
})

app.listen(9000,()=>{
    console.log("server is running on the port 9000");
})