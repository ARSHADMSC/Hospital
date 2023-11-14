const express = require('express');
const departmentHeadRouter = require('../Controller/departmentHead');
const router = express.Router();

router.post("/add",departmentHeadRouter.addDepartmentHead)
router.get("/getdepartment/:id",departmentHeadRouter.fetchDepartmentHead)
router.put("/editDepartment/:id",departmentHeadRouter.editDepartmentHead)
router.delete("/deleteDepartment/:id",departmentHeadRouter.deletDepartmentHead)

module.exports=router;