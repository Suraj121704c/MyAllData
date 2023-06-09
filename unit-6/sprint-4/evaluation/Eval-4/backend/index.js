const express = require("express");
const cors = require("cors");
const app = express();
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const { authenticate } = require("./middleware/auth.middleware");
const { deviceRouter } = require("./routes/Device.routes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to HomePage");
});

app.use("/users", userRouter);
app.use(authenticate);
app.use("/posts", deviceRouter);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to Atlas Server...");
  } catch (error) {
    console.log(error.message);
  }
  console.log("Server is running at port 8000...");
});
