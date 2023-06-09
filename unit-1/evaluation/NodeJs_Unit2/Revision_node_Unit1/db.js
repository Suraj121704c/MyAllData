const mongoose = require("mongoose");

const connection = mongoose.connect(
  `mongodb+srv://suraj121704c:singh123@cluster0.ndbapyz.mongodb.net/node_unit2_day1?retryWrites=true&w=majority`
);

module.exports = {
  connection,
};
