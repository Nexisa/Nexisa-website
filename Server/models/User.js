const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
    },
    role: {
      type: String,
      enum: ["employee", "admin"],
      default: "employee",
      required: true,
    },
    profilePicture: {
      type: String,
    },
    phone: {
      type: String,
    },
    token: {
      type: String,
    },
    // leave days taken in the current year
    leaveDaysTaken: {
      type: Number,
      default: 0, // tracking of how many leave days have been taken
    },
    leaveResetDate: {
      type: Date,
      default: new Date(new Date().getFullYear(), 0, 1), // Resets at the start of each year
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
