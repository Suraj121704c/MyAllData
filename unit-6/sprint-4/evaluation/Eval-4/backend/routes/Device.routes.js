const express = require("express");
const { deviceModel } = require("../models/Device.modesl");

const deviceRouter = express.Router();

deviceRouter.get("/", async (req, res) => {
  const devices = await deviceModel.find({ user: req.body.user });
  res.send(devices);
});

deviceRouter.get("/:id", async (req, res) => {
  const deviceId = req.params.id;
  const devices = await deviceModel.find({ _id: deviceId });
  res.send(devices);
});

deviceRouter.post("/add", async (req, res) => {
  const payload = req.body;
  const device = new deviceModel(payload);
  await device.save();
  res.status(200).json({ msg: "Device successfully created..." });
});

deviceRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const deviceID = req.params.id;
  await deviceModel.findByIdAndUpdate({ _id: deviceID }, payload);
  res.status(200).json({ msg: `Device with id ${deviceID} has been updated` });
});

deviceRouter.delete("/delete/:id", async (req, res) => {
  const deviceID = req.params.id;
  await deviceModel.findByIdAndDelete({ _id: deviceID });
  res.status(200).json({ msg: `Device with id ${deviceID} has been deleted` });
});

module.exports = {
  deviceRouter,
};
