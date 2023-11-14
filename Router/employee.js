const express = require('express');
const employeeRouter = require('../Controller/employee');
const router = express.Router();

router.post("/addEmployee",employeeRouter.addEmployee)
router.get("/getemployee/:id",employeeRouter.fetchEmployee)
router.put("/editemploye/:id",employeeRouter.editEmployee)
router.delete("/deleteDepartment/:id",employeeRouter.deletEmployee)

module.exports=router;