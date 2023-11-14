const express = require('express');
const departmentRouter = require('../Controller/department');
const router = express.Router();

router.post("/add",departmentRouter.addDepartment)
router.get("/getdepartment/:id",departmentRouter.fetchDepartment)
router.put("/editDepartment/:id",departmentRouter.editDepartment)
router.delete("/deleteDepartment/:id",departmentRouter.deletDepartment)

module.exports=router;