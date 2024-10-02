const express = require("express");
const {
  login,
  registerAdmin,
  signup,
  logout,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

//route for login
router.post("/signin", login);

//route for signup
router.post("/signup", signup);

// Admin registration (admin only)
router.post("/register-admin", registerAdmin);

// route for logout (both employee and admin)
router.post("/logout", authMiddleware(), logout); // New logout route

module.exports = router;
