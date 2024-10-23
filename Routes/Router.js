const express=require('express')

const router=express.Router()

const employeeContoller=require('../Controllers/employeeController')

router.post("/addemp",employeeContoller.addEmployee)
router.get("/getemp",employeeContoller.getEmployee)
router.delete("/deleteemp/:id",employeeContoller.deleteEmployee)
router.put("/updateemp/:id",employeeContoller.updateEmployee)

module.exports=router