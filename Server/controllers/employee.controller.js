const User = require("../models/User");
const LeaveApplication = require("../models/LeaveApplication");
const { uploadImage } = require("../services/CloudinaryService");
const bcrypt = require("bcrypt");
const SalarySlip = require("../models/SalarySlip");
const moment = require("moment");
const { getDataUri } = require("../config/datauri");

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
  let cloudResponse;
  try {
    // Check if Multer has successfully uploaded the file
    const profilePicture = req.file;
    if (!profilePicture) {
      return res.status(400).json({ message: "No image data provided" });
    }

    // uploading the profile picture
    if (profilePicture) {
      const fileUri = getDataUri(profilePicture);
      cloudResponse = await uploadImage(fileUri);
    }
    // Find the user
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Update user's profile picture URL
    user.profilePicture = cloudResponse.secure_url;
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

    // Create the leave application
    const newLeave = new LeaveApplication({
      user: userId,
      startDate,
      endDate,
      reason,
    });

    await newLeave.save();

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

exports.getAllLeave = async (req, res) => {
  try {
    const userId = req.user._id;
    const leaveStatus = await LeaveApplication.find({user: userId});
    if(!leaveStatus){
      return res.status(404).json({
        success:false,
        message:"No leave application found",
      });
    }

    return res.status(200).json({
      success:true,
      message:'All leaves fetched successfully',
      leaveStatus
    });

  } catch (error) {
    console.log("Error while fetching leave --> ", error);
    return res.status(500).json({
      success:false,
      message:'Something went wrong while fetching leaves'
    })
  }
}

exports.getLeaveById = async (req, res) => {
  try {
    const {id} = req.params;
    if(!id){
      return res.status(401).json({
        success:false,
        message:'No id is found in params'
      });
    }

    const leave = await LeaveApplication.findById(id);

    if(!leave){
      return res.status(404).json({
        success:false,
        message:'Leave not found'
      });
    }

    return res.status(200).json({
      success:true,
      message:'Leave fetched successfully',
      leave
    })

  } catch (error) {
    console.log("Error while fetching leave by ID -> ", error);
    return res.status(500).json({
      success:false,
      message:'Error while fetching leave by ID'
    })
  }
}

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
