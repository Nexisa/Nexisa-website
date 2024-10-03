const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res
        .status(401)
        .json({ status: false, message: "No auth, authorization denied" });
    }
    // console.log(authHeader);
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "No token, authorization denied" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      req.user = user;

      if (roles.length && !roles.includes(decoded.role)) {
        return res
          .status(403)
          .json({
            status: false,
            message: "Access denied, insufficient permissions",
          });
      }

      next();
    } catch (error) {
      console.error("Token verification error:", error);
      res.status(401).json({ status: false, message: "Token is not valid" });
    }
  };
};

module.exports = authMiddleware;
