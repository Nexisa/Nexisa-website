const User = require("../models/User");
const LeaveApplication = require("../models/LeaveApplication");
const { uploadImage } = require("../services/CloudinaryService");

//controller for updating the user profile (working on it not completed yet)
exports.updateProfile = async (req, res) => {
  const { phone } = req.body;
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    user.phone = phone || user.phone;
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
  const userId = req.user.id;
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
  const userId = req.user.id;
  try {
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