const express = require("express");
const { connection } = require("./connection");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to HomePage!!!");
});

app.listen(5000, async () => {
  try {
    await connection;
    console.log("Connected to Atlas Server...");
  } catch (error) {
    console.log(error.message);
  }
  console.log("Server is running...");
});
