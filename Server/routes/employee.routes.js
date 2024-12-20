const express = require("express");
const multer = require("multer");

const {
  updateProfile,
  applyLeave,
  updateProfilePicture,
  getUserById,
  getSalarySlips,
  getAllLeave,
  getLeaveById,
} = require("../controllers/employee.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const { upload } = require("../middlewares/multer");
const router = express.Router();

// route for updating the user profile (by employee only)
router.put("/profile", authMiddleware(["employee"]), updateProfile);

// route for updating only profile picture (by employee only)
router.put(
  "/profile-picture",
  authMiddleware(["employee"]),
  upload.single("profilePicture"), // This extracts the uploaded image from the request
  updateProfilePicture
);

router.get("/profile", authMiddleware(["employee"]), getUserById);

// route for applying leave (by employee only)
router.post("/leave", authMiddleware(["employee"]), applyLeave);
router.get('/leave-details', authMiddleware(["employee"]), getAllLeave);
router.get('/leaveById/:id', authMiddleware(["employee"]), getLeaveById)

//route for getting user details
router.get("/user-details", authMiddleware(), getUserById);

// route for getting salary slip
router.get("/salary-slips", authMiddleware(), getSalarySlips);

module.exports = router;
