const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema({
  title: String,
  body: String,
  device: String,
  user: String,
});

const deviceModel = mongoose.model("device", deviceSchema);

module.exports = {
  deviceModel,
};
