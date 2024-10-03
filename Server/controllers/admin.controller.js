const User = require("../models/User");
const LeaveApplication = require("../models/LeaveApplication");
const SalarySlip = require("../models/SalarySlip");
const bcrypt = require("bcrypt");
const { uploadImage } = require("../services/CloudinaryService");
const { v4: uuidv4 } = require("uuid");

// Admin can view all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" });
    res.json({ success: true, employees });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Admin can view all leave applications
exports.getAllLeaveApplications = async (req, res) => {
  try {
    const leaveApplications = await LeaveApplication.find().populate(
      "user",
      "name email"
    );
    res.json({ success: true, leaveApplications });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Admin can approve/reject leave application
exports.manageLeaveApplication = async (req, res) => {
  const { leaveId, status } = req.body; // status can be 'approved' or 'rejected'
  try {
    const leaveApplication = await LeaveApplication.findById(leaveId);
    if (!leaveApplication)
      return res
        .status(404)
        .json({ success: false, message: "Leave application not found" });

    leaveApplication.status = status;
    await leaveApplication.save();

    res.json({ success: true, message: `Leave application ${status}` });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Admin can upload salary slip for an employee
exports.addSalarySlip = async (req, res) => {
  const { user, month } = req.body;
  try {
    // Check if Multer has successfully uploaded the file
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file provided" });
    }

    // Upload the file to Cloudinary
    const upload = await uploadImage(req.file.path);

    const newSlip = new SalarySlip({
      user: user,
      month,
      fileUrl: upload.secure_url,
    });
    await newSlip.save();

    res.json({
      success: true,
      message: "Salary slip added successfully",
      fileUrl: upload.secure_url,
    });
  } catch (error) {
    console.error("Add salary slip error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// Admin can add a new employee

exports.addEmployee = async (req, res) => {
  const { name, email, password, phone, accountDetails } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // const newEmployeeId = Math.floor(10000000 + Math.random() * 90000000);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      employeeId: uuidv4().substr(0, 8),
    });
    await newUser.save();

    res.json({ success: true, message: "Employee added successfully" });
  } catch (error) {
    console.error("Add employee error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
