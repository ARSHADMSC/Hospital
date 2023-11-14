const departmentModel= require("../Model/department");

//add department
exports.addDepartment = async(req,res)=>{
    const data = new departmentModel({
        deptartmentName:req.body.deptartmentName,
        // deptartmentImage:req.body.deptartmentImage,
        year:req.body.year,
        Description:req.body.Description
    })
    const val = await data.save();
res.json(val);
}

//fetch departmnt
exports.fetchDepartment = async(req,res)=>{
    const id = req.params.id;
try{
    const newval=await departmentModel.findById(id);
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


//edit department
exports.editDepartment = async(req,res)=>{
    const departmentId=req.params.id;
    const updated= req.body;
    try{
        const updatedData= await departmentModel.findByIdAndUpdate(departmentId,updated);
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


//delete department
exports.deletDepartment = async(req,res)=>{
    const departmentId = req.params.id;
   try{
    const deleted = await departmentModel.findByIdAndDelete(departmentId);
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
