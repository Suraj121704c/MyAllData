const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { userModel } = require("../models/User.models");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, gender, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log(err.message);
        res.status(400).json({ err: err.message });
      } else {
        const user = await userModel({ name, email, gender, password: hash });
        await user.save();
        res.status(200).json({ msg: "New user created..." });
      }
    });
  } catch (error) {
    res.status(400).json({ err: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (result) {
          // to create token with jwt
          let token = jwt.sign({ userID: user[0]._id }, "masai");
          res.status(200).json({ msg: "Logged in", token: token });
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

module.exports = {
  userRouter,
};
