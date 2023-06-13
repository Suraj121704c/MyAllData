const jwt = require("jsonwebtoken");
const { blackModel } = require("../Models/Black.model");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  const blackListedToken = await blackModel.findOne({ token });

  if (blackListedToken) {
    return res.status(403).json({ message: "token has been blacklisted" });
  }
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  jwt.verify(token, "lodalassan@123" , (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticate };
