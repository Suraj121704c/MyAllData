const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  blog: { type: String, required: true },
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = {
  blogModel,
};
