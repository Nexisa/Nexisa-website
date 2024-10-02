const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//controller for login employee admin
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      role: user.role,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// route for registering admin
exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let admin = await User.findOne({ email, role: "admin" });
    if (admin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    admin = new User({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    res.status(200).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Admin registration error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// controller for looging out the employee or admin
exports.logout = async (req, res) => {
  try {
    // Get the token from the request headers
    const token = req.header("Authorization").replace("Bearer ", "");

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
