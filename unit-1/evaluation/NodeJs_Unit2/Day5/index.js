// all dependencies are added to the folder in this ok guys
const express = require("express");
const app = express();
const { connection } = require("./db");
const { userRouter } = require("./Routes/UserRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Welcome to HomePage`);
});

app.use("/users", userRouter);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to Atlas Server...");
  } catch (err) {
    console.log(err.message);
  }
  console.log("Server is running...");
});
