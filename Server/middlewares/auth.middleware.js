const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
    try {
      // Extracting JWT from request cookies, body or header
      const token =
        req.cookies.token ||
        req.body.token ||
        req.header("Authorization")?.replace("Bearer ", "");

      // If JWT is missing, return 401 Unauthorized response
      if (!token) {
        return res.status(401).json({
          success: false,
          message: `Token Missing`,
        });
      }

      // Verifying the JWT using the secret key stored in environment variables
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      // Storing the decoded JWT payload in the request object for further use
      req.user = user;

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({
          success: false,
          message: "Access denied, insufficient permissions",
        });
      }

      // If JWT is valid, move on to the next middleware or request handler
      next();
    } catch (error) {
      // If there is an error during the authentication process, return 401 Unauthorized response
      return res.status(401).json({
        success: false,
        message: `Something Went Wrong While Validating the Token`,
      });
    }
  };
};

module.exports = authMiddleware;
