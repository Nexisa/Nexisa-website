const User = require("../models/User");
const LeaveApplication = require("../models/LeaveApplication");
const SalarySlip = require("../models/SalarySlip");
const bcrypt = require("bcrypt");
// Admin can view all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Admin can view all leave applications
exports.getAllLeaveApplications = async (req, res) => {
  try {
    const leaveApplications = await LeaveApplication.find().populate(
      "user",
      "name email"
    );
    res.json(leaveApplications);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Admin can approve/reject leave application
exports.manageLeaveApplication = async (req, res) => {
  const { leaveId, status } = req.body; // status can be 'approved' or 'rejected'
  try {
    const leaveApplication = await LeaveApplication.findById(leaveId);
    if (!leaveApplication)
      return res.status(404).json({ message: "Leave application not found" });

    leaveApplication.status = status;
    await leaveApplication.save();

    res.json({ message: `Leave application ${status}` });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Admin can upload salary slip for an employee
exports.addSalarySlip = async (req, res) => {
  const { userId, month, amount, fileUrl } = req.body; // fileUrl from Cloudinary (still on working not completed yet)
  try {
    const newSlip = new SalarySlip({
      user: userId,
      month,
      amount,
      fileUrl,
    });
    await newSlip.save();

    res.json({ message: "Salary slip added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Admin can add a new employee
exports.addEmployee = async (req, res) => {
  const { name, email, password, phone, accountDetails } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "employee",
      phone,
      accountDetails,
    });
    await newUser.save();

    res.json({ message: "Employee added successfully" });
  } catch (error) {
    console.error("Add employee error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
