// routes/admin.routes.js
const express = require("express");

const {
  getAllEmployees,
  getEmployeeById,
  getAllLeaveApplications,
  manageLeaveApplication,
  getLeaveApplicationById,
  addSalarySlip,
  addEmployee,
  deleteEmployee,
  getAllApprovedLeaveApplications,
} = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
const { upload } = require("../middlewares/multer");
// Apply admin authentication middleware to all routes
router.use(authMiddleware(["admin"]));

//route for getting all employees
router.get("/employees", getAllEmployees);

//route for getting a specific employee by ID
router.get("/employees/:id", getEmployeeById);

// route for getting all leave applications
router.get("/leave-applications", getAllLeaveApplications);
router.get('/approved-leaves', getAllApprovedLeaveApplications)

// route for managing leave application
router.put("/manage-leave", manageLeaveApplication);

// get leave application by it's id
router.get("/leave-applications/:id", getLeaveApplicationById);

// route for adding salary slip
router.post("/add-salary-slip", upload.single("file"), addSalarySlip);

// route for adding employee
router.post("/add-employee", addEmployee);

// route for deleting employee
router.delete("/delete-employee/:id", deleteEmployee);

module.exports = router;
