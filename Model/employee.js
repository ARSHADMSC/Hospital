const { default: mongoose } = require("mongoose");


const employeedSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    EmployeeNumber:{
        type:Number,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    ProfileImage:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    Reportto:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})


const employeeModel = mongoose.model("employee",employeedSchema);
module.exports=employeeModel;