const departmentheadModel = require("../Model/departmentHead")

//add departmenthead
exports.addDepartmentHead = async(req,res)=>{
    const data = new departmentheadModel({
        deptheadName:req.body.deptheadName,
        EmployeeNumber:req.body.EmployeeNumber,
        Age:req.body.Age,
        ProfileImage:req.params.ProfileImage,
        Description:req.params.Description,
        Department:req.body.Department
    })
    const val = await data.save();
res.json(val);
}

//fetch departmenthead
exports.fetchDepartmentHead = async(req,res)=>{
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


//edit departmenthead
exports.editDepartmentHead = async(req,res)=>{
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


//delete departmenthead
exports.deletDepartmentHead = async(req,res)=>{
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
