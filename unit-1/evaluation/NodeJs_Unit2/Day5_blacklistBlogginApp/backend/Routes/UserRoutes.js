const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../Modles/user.Model");
const { authenticate } = require("../Middleware/auth.middleware");
const { blackListModel } = require("../Modles/BlackList.Model");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const user = await userModel.find();
  res.send(user);
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log(err.message);
        res.status(400).json({ err: err.message });
      } else {
        const user = await userModel({ name, email, password: hash });
        await user.save();
        res.status(200).json({ msg: "New user has been registered" });
      }
    });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    //   secretKey = lodalassan@123
    try {
      const user = await userModel.find({ email });
      if (user.length > 0) {
        bcrypt.compare(password, user[0].password, async (err, result) => {
          if (result) {
            let token = jwt.sign({ userID: user[0]._id }, "suraj", {
              expiresIn: "7d",
            });
            const refreshToken = jwt.sign(
              { userID: user[0]._id },
              "suraj",
              {
                expiresIn: "30d",
              }
            );
            res.status(200).json({
              msg: "Logged in",
              token: token,
              refreshToken: refreshToken,
            });
          } else {
            res.status(400).json({ err: err.message });
          }
        });
      } else {
        res.status(400).json({ msg: "wrong credentials!!! Try again..." });
      }
    } catch (error) {
      res.status(400).json({ err: error.message });
    }
  });
  

userRouter.post("/logout", authenticate, async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const blackListing = new blackListModel({ token });
    await blackListing.save();
    res.send("Logout Successfully");
  } catch (error) {
    res.send("Something went wrong");
  }
});

userRouter.post("/refresh", async (req, res) => {
  const refreshToken = req.headers["authorization"];
  if (!refreshToken) {
    res.send("refresh token is not available");
  }
  const blacklistedToken = blackListModel.findOne({ token: refreshToken });
  if (blacklistedToken) {
    res.send("bhadwae tu blacklisted hai...");
  }
  jwt.verify(token, "suraj", function (err, decoded) {
    if (err) {
      res.send("Invalid refresh token");
    }
  });

  const token = jwt.sign({ id: user._id }, "suraj", {
    expiresIn: "1h",
  });

  res.send({ token });
});

module.exports = {
  userRouter,
};
