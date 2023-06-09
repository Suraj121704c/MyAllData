const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/UserRoutes");
const { authenticate } = require("./middleware/auth.middleware");
const { deviceRouter } = require("./routes/DeviceRoutes");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to HomePage");
});

app.use("/users", userRouter);
// authenticate middleware is useful for the routes of products etc.
app.use(authenticate)
app.use("/devices" , deviceRouter)


app.listen("8000", async () => {
  try {
    await connection;
    console.log("Connected to Atlas Server...");
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server is running at port 8000`);
});
