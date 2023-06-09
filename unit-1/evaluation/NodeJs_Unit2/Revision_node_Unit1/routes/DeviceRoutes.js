const express = require("express");
const { deviceModel } = require("../models/Device.model");

const deviceRouter = express.Router();

deviceRouter.get("/", async (req, res) => {
  const devices = await deviceModel.find({ user: req.body.user });
  res.send(devices);
});

deviceRouter.post("/add", async (req, res) => {
  const payload = req.body;
  const device = new deviceModel(payload);
  await device.save();
  res.status(200).json({ msg: "Device successfully created..." });
});

module.exports = {
  deviceRouter,
};
