const jwt = require("jsonwebtoken");
const { blackListModel } = require("../Modles/BlackList.Model");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  const blackListToken = await blackListModel.findOne({ token });

  if (blackListToken) {
    return res.status(400).json({ message: "token has bee blacklisted" });
  }

  if (!token) {
    return res.status(400).json({ message: "token not found" });
  }

  jwt.verify(token, "suraj", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticate };
