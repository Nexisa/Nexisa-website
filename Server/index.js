const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const employeeRoutes = require("./routes/employee.routes");
const adminRoutes = require("./routes/admin.routes");
const { cloudinaryConnect } = require("./config/cloudinary");
//********************************database connection********************************
connectDB();
cloudinaryConnect();
//********************************middlewares********************************
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://nexisa-backend.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.json("Server is up and running");
})
//********************************routes********************************
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/employee", employeeRoutes); // Employee specific routes
app.use("/api/admin", adminRoutes); // Admin specific routes
//********************************start server********************************
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running successfully PORT: ${PORT}`);
});
