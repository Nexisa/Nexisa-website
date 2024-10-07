const User = require("../models/User");
const LeaveApplication = require("../models/LeaveApplication");
const { uploadImage } = require("../services/CloudinaryService");
const bcrypt = require("bcrypt");
const SalarySlip = require("../models/SalarySlip");
const moment = require("moment");

// controller for updating the user profile (working on it not completed yet)
exports.updateProfile = async (req, res) => {
  const { name, phone, email, password } = req.body;
  const userId = req.user._id;
  // console.log(userId)
  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword; // Update the password
    }

    user.phone = phone || user.phone;
    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();

    res.json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// update only profile picture (still working on this not completed yet)
exports.updateProfilePicture = async (req, res) => {
  const userId = req.user._id;
  try {
    // Check if Multer has successfully uploaded the file
    if (!req.file) {
      return res.status(400).json({ message: "No image data provided" });
    }

    // Find the user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Upload the file to Cloudinary using the file path provided by Multer
    const upload = await uploadImage(req.file.path);

    // Update user's profile picture URL
    user.profilePicture = upload.secure_url;
    await user.save();

    // Return success response
    res.json({
      message: "Profile picture updated successfully",
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.error("Profile picture update error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// controller for sending leave application (Employee)
exports.applyLeave = async (req, res) => {
  const { startDate, endDate, reason } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Calculate number of leave days requested
    const leaveDaysRequested =
      moment(endDate).diff(moment(startDate), "days") + 1;

    // Check if the leave year has changed (Reset leave count)
    const currentYear = new Date().getFullYear();
    if (user.leaveResetDate.getFullYear() !== currentYear) {
      user.leaveDaysTaken = 0; // Reset leave count
      user.leaveResetDate = new Date(currentYear, 0, 1); // Update reset date
    }

    // Check if employee has enough leave days remaining
    if (user.leaveDaysTaken + leaveDaysRequested > 18) {
      return res.status(400).json({
        success: false,
        message: `Leave request exceeds annual limit. You have ${
          18 - user.leaveDaysTaken
        } leave days remaining.`,
      });
    }

    // Create the leave application
    const newLeave = new LeaveApplication({
      user: userId,
      startDate,
      endDate,
      reason,
    });

    await newLeave.save();

    // Update user's leave days
    user.leaveDaysTaken += leaveDaysRequested;
    await user.save();

    res.json({
      success: true,
      message: "Leave application submitted successfully",
      leaveApplication: newLeave,
    });
  } catch (error) {
    console.error("Leave application error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
// get user by id
exports.getUserById = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User is not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching user", error });
  }
};

// get salary slip
exports.getSalarySlips = async (req, res) => {
  if (!req.user || !req.user._id) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: No user found in request.",
    });
  }
  const userId = req.user._id;

  try {
    const salarySlips = await SalarySlip.find({ user: userId });

    if (!salarySlips || salarySlips.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No salary slips found for this user.",
      });
    }

    res.status(200).json({
      success: true,
      salarySlips,
    });
  } catch (error) {
    console.error("Error fetching salary slips:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
