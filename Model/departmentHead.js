const { default: mongoose } = require("mongoose");


const DepartmentheadSchema = new mongoose.Schema({
    deptheadName:{
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
    }
},{
    timestamps:true,
})


const departmentheadModel = mongoose.model("department",DepartmentheadSchema);
module.exports=departmentheadModel;