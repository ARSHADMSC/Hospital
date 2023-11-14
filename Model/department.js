const { default: mongoose } = require("mongoose");


const DepartmentSchema = new mongoose.Schema({
    deptartmentName:{
        type:String,
        required:true
    },
    // deptartmentImage:{
    //     type:String,
    //     required:true
    // },
    year:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})


const departmentModel = mongoose.model("department",DepartmentSchema);
module.exports=departmentModel;