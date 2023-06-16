const express = require("express");
const { connection } = require("./connection");
const { userRouter } = require("./Routes/UserRoutes");
const { BlogRouter } = require("./Routes/BlogRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to HomePage!!!");
});

app.use("/users", userRouter);
app.use("/blogs" , BlogRouter)

app.listen(5000, async () => {
  try {
    await connection;
    console.log("Connected to Atlas Server...");
  } catch (error) {
    console.log(error.message);
  }
  console.log("Server is running...");
});
