// routes/admin.routes.js
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  getAllEmployees,
  getEmployeeById,
  getAllLeaveApplications,
  manageLeaveApplication,
  getLeaveApplicationById,
  addSalarySlip,
  addEmployee,
  deleteEmployee,
} = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

// Apply admin authentication middleware to all routes
router.use(authMiddleware(["admin"]));

//route for getting all employees
router.get("/employees", getAllEmployees);

//route for getting a specific employee by ID
router.get("/employees/:id", getEmployeeById);

// route for getting all leave applications
router.get("/leave-applications", getAllLeaveApplications);

// route for managing leave application
router.put("/manage-leave", manageLeaveApplication);

// get leave application by it's id
router.get("/leave-applications/:id", getLeaveApplicationById);

// route for adding salary slip
router.post("/add-salary-slip", upload.single("fileUrl"), addSalarySlip);

// route for adding employee
router.post("/add-employee", addEmployee);

// route for deleting employee
router.delete("/delete-employee/:id", deleteEmployee);

module.exports = router;
