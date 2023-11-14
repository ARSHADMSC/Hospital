const employeeModel = require("../Model/employee")

//add employee
exports.addEmployee = async(req,res)=>{
    const data = new employeeModel({
        Name:req.body.Name,
        EmployeeNumber:req.body.EmployeeNumber,
        Age:req.body.Age,
        ProfileImage:req.params.ProfileImage,
        Description:req.params.Description,
        Department:req.body.Department,
        Reportto:req.params.Reportto
    })
    const val = await data.save();
res.json(val);
}

//fetch employee
exports.fetchEmployee= async(req,res)=>{
    const id = req.params.id;
try{
    const newval=await departmentheadModel.findById(id);
    if(!newval){
        res.send("no category found")
    }else{
        res.json(newval)
    }
}catch(error){
    console.error("Error in fetching category",error);
    res.status(500).send("Internal server error")

}
}


//edit employee
exports.editEmployee = async(req,res)=>{
    const departmenheadtId=req.params.id;
    const updated= req.body;
    try{
        const updatedData= await departmentheadModel.findByIdAndUpdate(departmenheadtId,updated);
        if(!updatedData){
            res.send("not updated category")
        }else{
            res.json(updatedData)
        }
    }catch(error){
        console.error("Error for updating category");
        res.status(500).send("Internal server error")
    }
}


//delete employee
exports.deletEmployee = async(req,res)=>{
    const departmentId = req.params.id;
   try{
    const deleted = await departmentheadModel.findByIdAndDelete(departmentId);
    if(!deleted){
        res.send("couldn't delete the item")
    }else{
        res.json(deleted)
    }
   }catch(error){
    console.error("Error in delete category");
    res.status(500).send("Internal error")
   } 
}
