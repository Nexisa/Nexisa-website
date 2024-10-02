// routes/admin.routes.js
const express = require("express");
const {
  getAllEmployees,
  getAllLeaveApplications,
  manageLeaveApplication,
  addSalarySlip,
  addEmployee,
} = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

// Apply admin authentication middleware to all routes
router.use(authMiddleware(["admin"]));

//route for getting all employees
router.get("/employees", getAllEmployees);

// route for getting all leave applications
router.get("/leave-applications", getAllLeaveApplications);

// route for managing leave application
router.put("/manage-leave", manageLeaveApplication);

// route for adding salary slip
router.post("/add-salary-slip", addSalarySlip);

// route for adding employee
router.post("/add-employee", addEmployee);

module.exports = router;
