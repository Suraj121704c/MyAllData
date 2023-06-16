const mongoose = require("mongoose");

const blackListSchema = mongoose.Schema({
  token: { type: String, required: true },
});

const blackListModel = mongoose.model("blackList", blackListSchema);

module.exports = {
  blackListModel,
};
