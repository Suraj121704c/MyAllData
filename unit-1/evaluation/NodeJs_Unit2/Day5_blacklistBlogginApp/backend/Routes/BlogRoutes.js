const express = require("express");
const { blogModel } = require("../Modles/Blog.Model");
const { authenticate } = require("../Middleware/auth.middleware");

const BlogRouter = express.Router();

BlogRouter.post("/create", authenticate, async (req, res) => {
  try {
    const blog = new blogModel(req.body);
    await blog.save();
    res.status(200).json({ msg: "Blog successfully added..." });
  } catch (err) {
    res.status(400).json({ err: "Something went wrong..." });
  }
});

BlogRouter.get("/", authenticate, async (req, res) => {
  const blog = await blogModel.find();
  res.send(blog);
});

module.exports = {
  BlogRouter,
};
