const express = require("express");

const {
  updateProfile,
  applyLeave,
  updateProfilePicture,
} = require("../controllers/employee.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// route for updating the user profile (by employee only)
router.put("/profile", authMiddleware(["employee"]), updateProfile);

// route for updating only profile picture (by employee only)
router.put(
  "/profile-picture",
  authMiddleware(["employee"]),
  updateProfilePicture
);

// route for applying leave (by employee only)
router.post("/leave", authMiddleware(["employee"]), applyLeave);

module.exports = router;
